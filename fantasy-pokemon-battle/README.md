# Fantasy Pokemon Battle
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

##### This program will allow a player to choose 2 pokemon, to have an imaginary battle, and the program will tell us which pokemon would win.

>This is a simple program with the goal of testing co-pilots understanding of api's and promises.

I've included screenshots of the process below to highlight how much was written by me, and how much was written by co-pilot.
**My contributions** are mostly **comments, function names**, and ocasional bug fixes.
Everything you see in **grey text** below is code suggestions **by co-pilot**.

<hr/>

Notes:

* Phrasing is everything!
Co-pilot kept suggesting code that uses Jquery, when i wanted to to use the modern "Fetch" method
![image](https://user-images.githubusercontent.com/9586453/151689625-b96451fb-625a-4eba-b5e4-af43ef4adad1.png)
Changing a few words completely changed the output. This one returns the modern, promise based output i was expecting
![image](https://user-images.githubusercontent.com/9586453/151689765-66a995f4-d93a-4d7f-bfb5-756709c719cc.png)


* Co-pilot auto-suggests small line completions as well as large codeblocks
![image](https://user-images.githubusercontent.com/9586453/151690313-9da73568-7a96-422e-bd21-84058b61bdd9.png)


* First test of the function
Open a new tab in firefox, and paste the code into the JS console (do it on an empty tab, not a webpage) It lists out 10 pokemon successfully on the first attempt!
![image](https://user-images.githubusercontent.com/9586453/151690384-98916f08-864d-4ed2-bd9b-5b0b6f5552ef.png)

* It guesses what you want to do next
![image](https://user-images.githubusercontent.com/9586453/151690514-1d4d715e-e0d6-4d29-95d2-6693588e26f6.png)
In this screenshot: i added the '// ' comment characters, and co-pilot suggested i a make a function about getting pokemon details.. lets give it a try
![image](https://user-images.githubusercontent.com/9586453/151690533-66b134e0-b177-4939-b42e-7b2718779b73.png)
![image](https://user-images.githubusercontent.com/9586453/151690575-9fbe45a5-fe1e-43bc-9591-cab09510820c.png)
Co-pilot anticipated what i wanted, and somehow knew that the output of the previous function had returned a "url" property against each pokemon. It wrote this entire function without my input.

* It repeats its suggestion??
![image](https://user-images.githubusercontent.com/9586453/151690689-ccfff787-4004-415c-93ab-7aaf2f3f5004.png)
It seems the algoritm driving co-pilot can sometimes be driven into a small feedback loop, resulting in it repeating itself until you correct it.



 


