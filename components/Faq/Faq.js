import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as superagent from 'superagent'
import Head from 'next/head'
import { error } from 'util';
import index from 'next/dist/lib/router';

const questions = [
  {
    question: "1. Why the tracker does not calculate balance?",
    answer: "First of all check if you filled in all the fields. If yes then refresh the page and try again. "
     
  },
  {
    question: "2. How can I add a wish to my list of wishes?",
    answer: "There is a blue button at the left top corner. Press that button, fill in all the fields and press button 'Add'. Close the form. "
     
  },

  {
    question: "3. What is 'hourly wage'",
    answer: "Amount of money you earn per hour."
     
  },
  {
    question: "4. How do I add a picture while creating a new wish?",
    answer: "You can copy a link to the picture and paste in into the field."
     
  },
]

export default class Faq extends React.Component{
      constructor () {
        super()
        this.renderFaq = this.renderFaq.bind(this);
        this.toggleOpen= this.toggleOpen.bind(this);
       
      }

      renderFaq() {
        let questionsArr = [];
        questionsArr=questions.map((item, index) => {
          return (
            <li onClick={(event)=>{this.toggleOpen(event)}} className="questions-list-item" key={index}>
              <div className="questions-list-question">{item.question}</div>
              <div className="questions-list-answer">{item.answer}</div>
            </li>
          );
        })
          return questionsArr;
      }

      toggleOpen(event){
        event.stopPropagation();
        let target = event.target.parentNode.classList;
        if(target.contains('opened')){
          target.remove('opened');
        } else {
          target.add('opened');
        }
        
      }
      

  

    render() {
        return(
          <div>
            <div id="body">
            <Head>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
              <link rel="stylesheet" href="../../static/css/about.css" />
            </Head>
            <Header />
              <div className="content-holder">
                <div className="questions-holder">
                <h2>Frequently Asked Questions</h2> 
                <ul className="list-completed">{this.renderFaq()}</ul>
                <h4>If you could not find what you were looking for, feel free to contact us via email</h4>
              </div>
            </div>
            </div>
              <Footer /> 
        </div>
        )
               
    }

}

