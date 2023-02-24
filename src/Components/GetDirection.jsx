import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

function GetDirection() {
   const steps = [
    {
        id:'Greet',
        message:'Hello,Welcome to Ije',
        trigger:'ask-name'
      },
      {
        id:'ask-name',
        message:'please enter your name',
        trigger:'waiting1'
      },
        {        
        id:'waiting1',
         user:true,
         trigger:'Name',
        },
      {
        id:'Name',
        message:'Hi {previousValue},where do you want to go today',
        end:true
      },
      //  {
      //      id:'issues',
      //      message:'thanks',
      //      end:true
  
      //  },


   ]

  return (
    <>
    <Segment floated='right'>
        <ChatBot steps={steps}/>

    </Segment>
    </>
  )
}

export default GetDirection
