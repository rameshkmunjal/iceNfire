Problem Statement:
	You are supposed to create an Angular application with following views-
	1) 	View-1 - A view to list all books , characters and houses in same repeater 
		(ngFor) . The view should use bootstrap cards to display the information. One 
		type of card (for example a card display a book) should look different from
		another type of card ( for exmaple a card displaying a house). The view difference 
		can be as simple as change of border color according to the category(red for 
		books, blue for characters and green for houses). The data should be sorted in 
		alphabetical order.

	2) 	View 2- On clicking the card , a view containing the detail of that
	book/character/house should open containg the information about it in 
	details.
## Synopsis
	View-1:
	1) We have developed a shell page that has header, footer components , code for NAV and 
	   router-outlet tags where components generated will be housed.
	2) For this view , we have created Home Component that will show the contents of all 
	   books , characters and houses in same repeater. 
	3) We have created a service called iceNfire.httpService that will be used to make 
	   http calls and send data to home in reply to their request.
	4) In this service , we have also created a function to sort the data since assignment 
	    requires data to be displayed in alphabetical order.
	5) Each card in this page has a link to show all details of that particular card and 
		to navigate the user to View-2
	6) We have added a property in response data objects - filterType - and further used 
		it to filter on click of select dropdown menu items.
	
	View-2 
	1) We have developed three components for this purpose to show a  card with full 
	information of a book or character or house.	
	2) When button on a card is clicked on home page , it sends id of that book/character/house
	to the router and an extended URL is got by mixing a string and id to make a call.
	3) Our iceNfire.httpService has a function - getCardById -  that gets extended url from calling 
	function and sends data in return.
	4) Display of single card has a button - Go Back - that takes the user to previous page when clicked.
	
	
## Technical Specifications
	Technologies used in this project are - HTML, CSS, Javascript, Angular.   

## Installation

    	Complete code of this api has been uploaded to my github page and address is :
 
		https://github.com/rameshkmunjal/iceNfire
		
		can be viewed at :
		https://rameshkmunjal.github.io/iceNfire

## Contributors

    1. Ramesh Kumar Munjal
