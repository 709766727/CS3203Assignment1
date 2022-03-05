const express = require('express');
const app = express();
app.use(express.json());

function test_print(){

         console.log(“test code”)

}
//all information needed
const Users=[
    {
        name: "Tim O'Reilly",
		screen_name: "timoreilly",
        created_at: "Wed Mar 13 23:01:36 +0000 2013",
        id: 311975360667459585,
        text: "Was wondering why @billgates cc'd me on story abt @MSFTResearch cool viral search tool; discovered I'm featured in it http:\/\/t.co\/g6oSeEIEUr"       
    },
    {
        name: "Mark Ury",
		screen_name: "MarkUry",
        created_at: "Wed Mar 13 22:16:59 +0000 2013",
        id: 311964132205268992,
        text: "The one page everyone in Hollywood is watching http:\/\/t.co\/jaX0uQqk4W  This is the film industry's Pebble Watch moment."      
    },
    {
        name: "danah boyd",
		screen_name: "zephoria",
        created_at: "Wed Mar 13 13:16:30 +0000 2013",
        id: 311828115477372928,
        text: "I reflected on why the #sxsw induction means so much to me and it took &gt;140 chars: http:\/\/t.co\/rJWz0jKrqf"
    },
    {
        name: "SarahPrevette",
		screen_name: "SarahPrevette",
        created_at: "Tue Mar 12 13:29:12 +0000 2013",
        id: 311468922962587651,
        text: "How to Create an Early Stage Pitch Deck\nhttp:\/\/t.co\/TdYB5I6xBl\n(Great advice from @ryanspoon )"
    },
    {
        name: "johnmaeda",
		screen_name: "johnmaeda",
        created_at: "Tue Mar 12 11:05:00 +0000 2013",
        id: 311432631726264320,
        text: "1st gear Empathy, 2nd gear Prototype, 3rd gear Align w\/ Reality http:\/\/t.co\/QxDfp2GLcQ by @Jabaldaia http:\/\/t.co\/CLcxKevjrY"
    },


];
//get all information
app.get('/', (req,res)=>{
    res.send(Users);
});

//access to get information by given id
app.get('/:id', (req,res)=>{
    const course = Users.find(c =>c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The user with the given ID was not found');
    res.send(course);
})


//create new tweet
app.post('/users', (req,res)=>{
    const course = {
        id: parseInt(req.body.id),
        text: req.body.text
    };
    Users.push(course);
    res.send(Users);
});

//update new screen name by given name
app.put('/:name', (req,res)=>{
    const course = Users.find(c =>c.name === req.params.name);
    if(!course) res.status(404).send('The user with the given name was not found');
    course.screen_name = req.body.screen_name;
    Users.push(course);
    res.send(course);
});

//delete information by given id
app.delete('/delete/:id',(req,res)=>{
    const course = Users.find(c=>c.id === parseInt(req.params.id));
    if(!course) res.status(404).send ('The user with the given ID was not found');

    const index = Users.indexOf(course);
    Users.splice(index,1);
    res.send(course);
});

const port = process.nextTick.PORT || 3000;
app.listen(port,()=>console.log('Listening on port '+ port+'...'));
