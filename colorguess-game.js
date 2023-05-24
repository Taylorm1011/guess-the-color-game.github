var pickColor = random();
        console.log(pickColor)
        

        var a =''
        function random(){
            pickColor =[Math.floor(Math.random()* 6 + 1)];

            if (pickColor == 1)

            {
                a = "red";
            }
            else if (pickColor == 2)

            {
                a = "orange";
            }
            else if (pickColor == 3)

            {
                a = "yellow";
            }
            else if (pickColor == 4)

            {
                a = "green";
            }
            else if (pickColor == 5)

            {
                a = "blue";
            }
            else if (pickColor == 6)

            {
                a = "purple";
            }
            


        }
        
        var b =''
        function choice(option){
            var feedback = document.getElementById('feedback')
            if (option == red){
                feedback.textContent = 'wrong'
            }
            else if (option == orange){
                feedback.textContent = 'wrong'
            }
            else if (option == yellow){
                feedback.textContent = 'wrong'
            }
            else if (option == green){
                feedback.textContent = 'wrong'
            }
            else if (option == blue){
                feedback.textContent = 'win'
            }
            else if (option == purple){
                feedback.textContent = 'wrong'
            }
        }
        
            var red = document.getElementById('red')
            var orange = document.getElementById('orange')
            var yellow = document.getElementById('yellow')
            var green = document.getElementById('green')
            var blue = document.getElementById('blue')
            var purple = document.getElementById('purple')

            red.addEventListener('click', choice(red))
            orange.addEventListener('click',choice(orange))
            yellow.addEventListener('click',choice(yellow))
            green.addEventListener('click',choice(green))
            blue.addEventListener('click', choice(blue))
            purple.addEventListener('click', choice(purple))
            

            