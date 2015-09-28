<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Title Page</title>

		<!-- Bootstrap CSS -->
		<link href="css/bootstrap.min.css" rel="stylesheet">
	</head>
	<body>
		<nav class="navbar navbar-inverse">
			<a class="navbar-brand" href="#">P+</a>
			<ul class="nav navbar-nav pull-right">
				<li class="active">
					<a href="#">Home</a>
				</li>
				<li>
					<a href="test.php">php Info</a>
				</li>
				<li>
					<a href="hello.html">Hello</a>
				</li>
			</ul>
		</nav>
		<div class="jumbotron">
			<div class="container">
				<h1>Hello, world!</h1>
				<p>Welcome to my site</p>
				<p>
					<a class="btn btn-primary btn-lg">Learn more</a>

				</p>
				<h2><?php echo "Hello world"; ?></h2>
			</div>
		</div>
		<!-- jQuery -->
		<script src="js/jquery.js"></script>
		<!-- Bootstrap JavaScript -->
		<script src="js/bootstrap.min.js"></script>
	</body>
</html>