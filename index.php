<?php

if (isset($_GET['play'])) {
	include 'play.html';
} elseif (isset($_GET['play-nomin'])) {
	include 'play-no-minifications.html';
} else {
	include 'menu.html';
}
