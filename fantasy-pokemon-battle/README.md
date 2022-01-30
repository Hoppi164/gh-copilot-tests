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

* Boy it's good at guessing what you want..
![image](https://user-images.githubusercontent.com/9586453/151690793-0d199774-c890-44b6-8907-46f4a935b612.png)

* It's got a habit of giving functions very sensible names and arguments
![image](https://user-images.githubusercontent.com/9586453/151690798-ff6949fc-5db4-4ea1-8e06-4812fc736760.png)

* Comparing base stats: It's at this point in the article i should probably mention that i've never played a pokemon game in my life, so in this matter i'm going to trust that co-pilot is correct in comparing base stats to determine the winner.
![image](https://user-images.githubusercontent.com/9586453/151690829-9eaee5f7-7c40-476f-accd-4a02809b547a.png)

* More short line auto-suggestions
![image](https://user-images.githubusercontent.com/9586453/151690899-27db08df-3d89-42eb-b06d-129c1ab4902e.png)
![image](https://user-images.githubusercontent.com/9586453/151690932-851ef408-6a39-461f-b37c-581167544113.png)

* Time to make them fight!
![image](https://user-images.githubusercontent.com/9586453/151690947-a2f5bbe7-f87b-41bf-ab7e-7cc0d071b593.png)
The previous time i tested this it listed Bulbasaur, and Ivysaur as pokemon0 and pokemon1 respectively; im going to assume it will keep them in the same order.
![image](https://user-images.githubusercontent.com/9586453/151690973-ba5fffc2-6bfe-43f9-b734-5aa5c2dcf628.png)
* Ivysaur is the winner!
![image](https://user-images.githubusercontent.com/9586453/151691224-242b5e48-eba4-4b28-8be4-b80d88b11f21.png)
* So after executing this, my wife made the comment that an Ivysaur is apparently a "grown up version" of the Bulbasaur, so it would be better to make two random pokemon fight.
![image](https://user-images.githubusercontent.com/9586453/151691420-dcd09ec1-97b9-4e83-8a22-dd677620279d.png)
![image](https://user-images.githubusercontent.com/9586453/151691434-43e4e9cf-6afa-41ca-b2d8-56af00d4b225.png)
![image](https://user-images.githubusercontent.com/9586453/151691448-b5f15e04-e1b0-4616-bda7-25f2764d61aa.png)
![image](https://user-images.githubusercontent.com/9586453/151691471-f3f1bc6a-73fd-4607-be31-d4e3acbff9b5.png)
* If you don't have a closing bracket on your function: it will sometimes suggest your code one line at a time. If you add a closing bracket: it will suggest the entire function all as one code chunk
![image](https://user-images.githubusercontent.com/9586453/151691531-44760181-9848-4ef5-9cb5-7f68666d87bc.png)
* It often figures out when you label a variable as something1, you will probably label something immediately after as something2
![image](https://user-images.githubusercontent.com/9586453/151691593-d0545788-37a7-4cbf-9529-9eaefc4a2dae.png)
* Adjusting out game code, it took a little bit of nudging to know what i wanted to console log
![image](https://user-images.githubusercontent.com/9586453/151691685-83801a75-7f43-428e-a42d-ef5db89f4225.png)
* Now we have to get their details again, (i'll do it a bit cleaner this time)
![image](https://user-images.githubusercontent.com/9586453/151691706-33bb8da2-f1dd-4518-ae92-8e154dc8a8e8.png)
![image](https://user-images.githubusercontent.com/9586453/151691715-eeb54dc1-20fb-45ee-bfa2-2c5b47c81991.png)
* And we need to update the getWinner paramaters
![image](https://user-images.githubusercontent.com/9586453/151691738-17408712-805b-4316-9ebd-2b9f931da737.png)
* Oops!, That's an error..
![image](https://user-images.githubusercontent.com/9586453/151691794-00a9edf9-6ae7-47e3-8ddf-ae5ba3671373.png)
So Co-pilot was smart enough to know that /pokemon/random was a likely candidate for an api endpoint, but it wasn't smart enough to actually check the docs because there is no /pokemon/random endpoint on this API!
![image](https://user-images.githubusercontent.com/9586453/151691913-60fc9863-bfaa-4508-8447-714926eb20de.png)

* However there only seem to be 1118 pokemon on this API endpoint (again, i haven't played pokemon but that seems like the full list of pokemon to me); so instead i'll just randomly generate a number between 0, and 1118 and return the pokemon at that index.
![image](https://user-images.githubusercontent.com/9586453/151695179-be52dfa2-8947-445f-83ea-2210e7b6e8e0.png)
![image](https://user-images.githubusercontent.com/9586453/151695252-ddfced00-0938-4be3-a492-c9e89d7e6f63.png)
![image](https://user-images.githubusercontent.com/9586453/151695270-acb22b29-e368-4eb3-b957-fedf4eb02b48.png)
![image](https://user-images.githubusercontent.com/9586453/151695282-f8b91118-c5de-4187-906a-91a0402ea30a.png)
![image](https://user-images.githubusercontent.com/9586453/151695297-0570f4d2-acd3-422f-8f25-2b0c610c88be.png)
![image](https://user-images.githubusercontent.com/9586453/151695318-3a362f96-145f-4956-96ac-ff3b880a2a8a.png)
![image](https://user-images.githubusercontent.com/9586453/151695329-4af15136-68e0-4112-a561-efd179a85665.png)
![image](https://user-images.githubusercontent.com/9586453/151695341-18d8594d-417e-4d20-9a0e-87fad0f45eb8.png)
* Now i'll just remove the old redundant code
![image](https://user-images.githubusercontent.com/9586453/151695367-0b939dfd-e74e-4e2e-b77e-afb45feb9095.png)
* And it works!, we're now randomly picking two pokemon and making them fight to determine who would win (purely determined on their base stats).
![image](https://user-images.githubusercontent.com/9586453/151695682-0f63ca13-99c9-4c59-8f36-376eb2df7071.png)
* Did the program work?: Yes
* How user friendly was Co-pilot?: Pretty damn friendly, it discovered an open API for me, and it wrote several functions all by itself.
* How clean was the code?: not bad, running standardJS linter over the file picked up 68 warnings, however all of these are automatically fixable.
![image](https://user-images.githubusercontent.com/9586453/151695797-d4040317-8392-48f2-a3b7-e45fe8adf0ce.png)
* Do i think Co-pilot will put me out of a job?: Nah, it's a long way off that happeing; Machines have always made jobs easier, but you still need somebody to drive the tractor.


