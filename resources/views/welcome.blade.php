<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="https://24rolls.com.ua/wp-content/uploads/2022/10/cropped-favicon-32x32.png" type="image/png">
        <title>Sushi24</title>

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/index.jsx'])
        
    </head>
    <body class="antialiased">
       <div id="root">

       </div>
    </body>
</html>
