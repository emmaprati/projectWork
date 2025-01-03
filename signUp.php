<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <link rel="stylesheet" href="../css/styleSignup.css">
    <title>Sign Up</title>
</head>

<body>
    <div class="intestazione">

        <a href="home.html"><img src="../img/Project Work(1).png" alt="logo" height="70px" class="int-logo"></a>
        <a href="home.html">
            <h1 class="int-title">TouchRoom</h1>
        </a>

        <div id="int-bottoni">
            <a href="login.html"><button class="signup" role="button">Log In</button></a>
            <a href="home.html"><button class="home" role="button">Home</button></a>
        </div>

    </div>

    <div class="main-content">
        <div class="login-container">
            <h1>Sign Up</h1>
            <form>
                <input type="name" placeholder="nome" class="input-field" required>
                <input type="name" placeholder="cognome" class="input-field" required>
                <input type="email" placeholder="email" class="input-field" required>
                <input type="password" placeholder="password" class="input-field" required>
                <input type="password" placeholder="conferma password" class="input-field" required>
                <div class="checkbox-container">
                    <input type="checkbox" id="remember-me">
                    <label for="remember-me">Ricordami</label>
                </div>
                <button type="submit" class="login-button">registrati</button>
            </form>
        </div>
</body>
<script src="../script/scriptSignup.js"></script>

</html>