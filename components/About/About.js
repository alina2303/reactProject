import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as superagent from 'superagent'
import Head from 'next/head'
import { error } from 'util';
import index from 'next/dist/lib/router';

const questions = [
  {
    question: "How can I?",
    answer: "I can"
     
  },
  {
    question: "How can I?",
    answer: "I can"
     
  },
  {
    question: "How can I?",
    answer: "I can"
     
  }
]

export default class About extends React.Component{
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
                <ul className="list-completed">{this.renderFaq()}</ul>
              </div>
            </div>
              <Footer /> 
        </div>
        )
               
    }

}

