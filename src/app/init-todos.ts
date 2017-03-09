//initialization file, init task list

export class Init{
    load(){
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined){
            console.log('nothing found...creating');
            var todos = [
                {
                    text: 'Go pick up kids'
                }, 
                {
                    text: 'Meeting with boss'
                },
                {
                    text: 'Dinner with wife'
                }
            ];

            localStorage.setItem('todos', JSON.stringify(todos));
            return
        }else{
            console.log("There're todos already...");
        }
        
    }
}