<?php
/**
 * Megamania Leaderboard API
 * 
 * GET  - Returns top 10 scores
 * POST - Submits a new score
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$scoresFile = __DIR__ . '/scores.json';
$maxScores = 100; // Store up to 100 scores, return top 10

// Load scores from file
function loadScores($file) {
    if (!file_exists($file)) {
        return [];
    }
    $content = file_get_contents($file);
    $scores = json_decode($content, true);
    return is_array($scores) ? $scores : [];
}

// Save scores to file
function saveScores($file, $scores) {
    file_put_contents($file, json_encode($scores, JSON_PRETTY_PRINT));
}

// Sanitize player name
function sanitizeName($name) {
    // Remove HTML tags and trim
    $name = strip_tags(trim($name));
    // Limit to 12 characters
    $name = substr($name, 0, 12);
    // Convert to uppercase for consistency
    $name = strtoupper($name);
    // Default name if empty
    return $name ?: 'PLAYER';
}

// GET - Return top 10 scores
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $scores = loadScores($scoresFile);
    
    // Sort by score descending
    usort($scores, function($a, $b) {
        return $b['score'] - $a['score'];
    });
    
    // Return top 10
    $topScores = array_slice($scores, 0, 10);
    
    echo json_encode([
        'success' => true,
        'scores' => $topScores
    ]);
    exit;
}

// POST - Submit a new score
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
        exit;
    }
    
    // Validate required fields
    if (!isset($input['name']) || !isset($input['score']) || !isset($input['wave'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Missing required fields']);
        exit;
    }
    
    $name = sanitizeName($input['name']);
    $score = intval($input['score']);
    $wave = intval($input['wave']);
    
    // Validate score and wave are positive
    if ($score < 0 || $wave < 1) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid score or wave']);
        exit;
    }
    
    // Load existing scores
    $scores = loadScores($scoresFile);
    
    // Add new score
    $newScore = [
        'name' => $name,
        'score' => $score,
        'wave' => $wave,
        'date' => date('Y-m-d H:i:s')
    ];
    $scores[] = $newScore;
    
    // Sort by score descending
    usort($scores, function($a, $b) {
        return $b['score'] - $a['score'];
    });
    
    // Keep only top scores
    $scores = array_slice($scores, 0, $maxScores);
    
    // Save scores
    saveScores($scoresFile, $scores);
    
    // Find the rank of the new score
    $rank = 0;
    foreach ($scores as $index => $s) {
        if ($s['score'] === $score && $s['name'] === $name && $s['date'] === $newScore['date']) {
            $rank = $index + 1;
            break;
        }
    }
    
    // Return top 10 with rank info
    $topScores = array_slice($scores, 0, 10);
    $onLeaderboard = $rank > 0 && $rank <= 10;
    
    echo json_encode([
        'success' => true,
        'rank' => $rank,
        'onLeaderboard' => $onLeaderboard,
        'scores' => $topScores
    ]);
    exit;
}

// Method not allowed
http_response_code(405);
echo json_encode(['success' => false, 'error' => 'Method not allowed']);
