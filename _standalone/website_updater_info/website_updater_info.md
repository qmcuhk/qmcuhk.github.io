---
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QMCUHK Website Updater - Installation Guide</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "Helvetica Neue", Arial, sans-serif;
            font-size: 16px;
            line-height: 1.6;
            color: #1a1a2e;
            background-color: #f8f9fa;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        header {
            text-align: center;
            margin-bottom: 40px;
        }

        .logo {
            font-size: 32px;
            font-weight: 700;
            color: #4361ee;
            margin-bottom: 8px;
        }

        .subtitle {
            font-size: 18px;
            color: #6c757d;
        }

        .card {
            background-color: white;
            border: 1px solid #dee2e6;
            border-radius: 12px;
            padding: 24px;
            margin-bottom: 24px;
        }

        .card-warning {
            background-color: #fff3cd;
            border-color: #ffc107;
        }

        .card-download {
            background-color: #e8f4fd;
            border-color: #4361ee;
            text-align: center;
        }

        h2 {
            font-size: 20px;
            font-weight: 600;
            color: #1a1a2e;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #4361ee;
        }

        h3 {
            font-size: 16px;
            font-weight: 600;
            color: #495057;
            margin: 16px 0 8px 0;
        }

        p {
            margin-bottom: 12px;
        }

        .warning-icon {
            font-size: 24px;
            margin-right: 8px;
        }

        .warning-title {
            display: flex;
            align-items: center;
            font-weight: 600;
            color: #856404;
            margin-bottom: 12px;
        }

        ul, ol {
            margin-left: 24px;
            margin-bottom: 16px;
        }

        li {
            margin-bottom: 8px;
        }

        code {
            background-color: #e9ecef;
            padding: 2px 8px;
            border-radius: 4px;
            font-family: "SF Mono", Monaco, Consolas, monospace;
            font-size: 14px;
            color: #d63384;
        }

        pre {
            background-color: #1a1a2e;
            color: #e0e0e0;
            padding: 16px;
            border-radius: 8px;
            overflow-x: auto;
            margin: 12px 0;
            font-family: "SF Mono", Monaco, Consolas, monospace;
            font-size: 14px;
            line-height: 1.5;
        }

        pre code {
            background: none;
            padding: 0;
            color: inherit;
        }

        .command {
            color: #4ade80;
        }

        .comment {
            color: #6b7280;
        }

        .btn {
            display: inline-block;
            background-color: #4361ee;
            color: white;
            padding: 14px 28px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            transition: background-color 0.2s;
        }

        .btn:hover {
            background-color: #3a56d4;
        }

        .download-info {
            margin-top: 12px;
            font-size: 14px;
            color: #6c757d;
        }

        .step-number {
            display: inline-block;
            width: 28px;
            height: 28px;
            background-color: #4361ee;
            color: white;
            border-radius: 50%;
            text-align: center;
            line-height: 28px;
            font-weight: 600;
            font-size: 14px;
            margin-right: 8px;
        }

        .step {
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
        }

        .step-content {
            flex: 1;
        }

        .step-title {
            font-weight: 600;
            margin-bottom: 4px;
        }

        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-top: 16px;
        }

        .feature {
            background-color: #f8f9fa;
            padding: 16px;
            border-radius: 8px;
            text-align: center;
        }

        .feature-icon {
            font-size: 32px;
            margin-bottom: 8px;
        }

        .feature-title {
            font-weight: 600;
            font-size: 14px;
        }

        footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #dee2e6;
            color: #6c757d;
            font-size: 14px;
        }

        a {
            color: #4361ee;
        }

        .screenshot {
            border: 1px solid #dee2e6;
            border-radius: 8px;
            margin: 16px 0;
            max-width: 100%;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="logo">QMCUHK Website Updater</div>
            <div class="subtitle">Installation & Usage Guide</div>
        </header>

        <!-- Important Notice -->
        <div class="card card-warning">
            <div class="warning-title">
                <span class="warning-icon">⚠️</span>
                Before You Start - Important!
            </div>
            <ol>
                <li><strong>Get GitHub Access:</strong> Contact the current website maintainer to get an invitation to the <a href="https://github.com/qmcuhk" target="_blank">qmcuhk</a> GitHub organization.</li>
                <li><strong>Accept the Invitation:</strong> Check your email and accept the collaboration invitation for the <code>qmcuhk.github.io</code> repository.</li>
                <li><strong>Clone the Repository:</strong> Clone the website repo to your local computer:
                    <pre><code><span class="command">git clone</span> https://github.com/qmcuhk/qmcuhk.github.io.git</code></pre>
                    Remember the folder path - you'll need it when registering in the app!
                </li>
            </ol>
        </div>

        <!-- Download Section -->
        <div class="card card-download">
            <h2 style="border: none; text-align: center;">Download</h2>
            <a href="assets/standalone/qmcuhk_updater-1.0.0-py3-none-any.whl" class="btn" download>
                Download QMCUHK Updater v1.0.0
            </a>
            <div class="download-info">
                qmcuhk_updater-1.0.0-py3-none-any.whl (~5 KB)<br>
                Requires Python 3.8 or higher
            </div>
        </div>

        <!-- Installation -->
        <div class="card">
            <h2>Installation</h2>
            
            <div class="step">
                <span class="step-number">1</span>
                <div class="step-content">
                    <div class="step-title">Install Python</div>
                    <p>Make sure you have Python 3.8 or higher installed. Download from <a href="https://www.python.org/downloads/" target="_blank">python.org</a> if needed.</p>
                    <p>Verify installation:</p>
                    <pre><code><span class="command">python3</span> --version</code></pre>
                </div>
            </div>

            <div class="step">
                <span class="step-number">2</span>
                <div class="step-content">
                    <div class="step-title">Install the App</div>
                    <p>Open Terminal, navigate to where you downloaded the <code>.whl</code> file, then run:</p>
                    <pre><code><span class="command">pip3 install</span> qmcuhk_updater-1.0.0-py3-none-any.whl</code></pre>
                    <p>This will automatically install all dependencies (PyQt5, requests, PyYAML).</p>
                    <p style="color: #6c757d; font-size: 14px; margin-top: 8px;">
                        <em>Alternatively, you can use a virtual environment if you prefer to keep packages isolated.</em>
                    </p>
                </div>
            </div>

            <div class="step">
                <span class="step-number">3</span>
                <div class="step-content">
                    <div class="step-title">Run the App</div>
                    <pre><code><span class="command">qmcuhk</span></code></pre>
                    <p>The GUI will launch! You can run this command anytime from any folder.</p>
                </div>
            </div>
        </div>

        <!-- First Time Setup -->
        <div class="card">
            <h2>First Time Setup</h2>
            <ol>
                <li>When the app launches, click <strong>"Register"</strong> to create your user profile.</li>
                <li>Enter your <strong>username</strong> (your name).</li>
                <li>Optionally enter your <strong>GitHub username</strong>.</li>
                <li>Click <strong>"Browse"</strong> and select the folder where you cloned <code>qmcuhk.github.io</code>.</li>
                <li>Click <strong>OK</strong> to register and login.</li>
            </ol>
            <p>Next time you open the app, just select your name and click <strong>Login</strong>.</p>
        </div>

        <!-- Features -->
        <div class="card">
            <h2>What Can You Do?</h2>
            <p>Watch the <a href="https://youtu.be/Zh4_jvWzumA" target="_blank">video tutorial on YouTube</a> for step-by-step instructions.</p>
            <div class="features">
                <div class="feature">
                    <div class="feature-icon">👥</div>
                    <div class="feature-title">Manage Members</div>
                </div>
                <div class="feature">
                    <div class="feature-icon">📄</div>
                    <div class="feature-title">Add Publications</div>
                </div>
                <div class="feature">
                    <div class="feature-icon">📰</div>
                    <div class="feature-title">Post News</div>
                </div>
                <div class="feature">
                    <div class="feature-icon">📋</div>
                    <div class="feature-title">Edit Openings</div>
                </div>
                <div class="feature">
                    <div class="feature-icon">📚</div>
                    <div class="feature-title">Update Teaching</div>
                </div>
            </div>
        </div>

        <!-- Usage Tips -->
        <div class="card">
            <h2>Usage Tips</h2>
            
            <h3>Adding Publications</h3>
            <p>You can import paper info automatically! Just paste a <strong>DOI</strong> or <strong>arXiv ID</strong> (e.g., <code>2303.02865</code>) and click "Fetch".</p>
            
            <h3>After Making Changes</h3>
            <p>The app modifies files in your local repo. To publish changes to the website:</p>
            <pre><code><span class="command">cd</span> /path/to/qmcuhk.github.io
<span class="command">git add</span> .
<span class="command">git commit</span> -m "Update website"
<span class="command">git push</span></code></pre>
            <p>Changes will appear on <a href="https://qmcuhk.github.io" target="_blank">qmcuhk.github.io</a> within a few minutes.</p>
            
            <h3>Running the App Later</h3>
            <p>Just open Terminal and type:</p>
            <pre><code><span class="command">qmcuhk</span></code></pre>
            <p>That's it! The command works from anywhere.</p>
        </div>

        <!-- Troubleshooting -->
        <div class="card">
            <h2>Troubleshooting</h2>
            
            <h3>Command not found: qmcuhk</h3>
            <p>Make sure the installation completed successfully. Try running <code>pip3 install qmcuhk_updater-1.0.0-py3-none-any.whl</code> again. You may need to restart your terminal.</p>
            
            <h3>Invalid Folder Error</h3>
            <p>The app expects the website folder to contain: <code>_members</code>, <code>_data</code>, <code>_pages</code>, <code>_notes</code>, <code>assets</code>. Make sure you selected the correct folder.</p>
            
            <h3>Need Help?</h3>
            <p>Contact the previous maintainer or check the repository documentation.</p>
        </div> 
    </div>
</body>
</html>
