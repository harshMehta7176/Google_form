import React,{useState,useEffect} from 'react'
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import  CheckboxIcon from '@material-ui/core/Checkbox';
import ShortTextIcon from '@material-ui/icons/ShortText';
import SubjectIcon from '@material-ui/icons/Subject';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {BsTrash} from 'react-icons/bs';
import {IconButton} from '@material-ui/core';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import  TextFieldsIcon from '@material-ui/icons/TextFields';
import {BsFileText} from "react-icons/bs";
import  Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import {FcRightUp} from "react-icons/fc";
import CloseIcon from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "./Question_form.css";
import {Typography} from'@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem'

function Question_form() {

       const [questions,setQuestions]=useState(
           [{questionText:"Which is the Capital of India ?",
            questionType:"radio",   
                   options : [
                       {optiontext:"Delhi" },
                       {optiontext:"Rajasthan"},
                       {optiontext:"Maharashtra"},
                       {optiontext:"Nepal"}
                   ],
                
                open:true,
                required: false}
                ])
    function changeQuestion(text,i){
        var newQuestion =[...questions];
        newQuestion[i].questionText = text;
        setQuestions(newQuestion);
        console.log(newQuestion) 
    }

    function addQuestionType(i,type){
        let qs=[...questions];
        console.log(type);
        qs[i].questionType = type;
        setQuestions(qs);
    
    
    }

    function questionsUI(){
        return questions.map((ques,i)=>(
            <div>
            <Accordion expanded={questions[i].open} className={questions[i].open ? 'add_border':""}>
             {/*   <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  elevation={1} style={{width:'100%'}}>
                      { questions[i].open ? (
                          <div className="saved_questions">


                            <Typography style={{fontSize:"15px",fontWeight:"400",letterSpacing:'.1px',lineHeight:'24px',paddingBottom:"8px"}}>
                                {i+1}.{questions[i].questionText}
                            </Typography>
                            {
                                ques.options.map((op, j)=>(
                                  <div key={j}>
                                      <div style={{display: 'flex',}}>
                                          <FormControlLabel style={{marginLeft:"5px",marginBottom:"5px"}} disabled control={<input type={ques.questionType}
                                          color="primary" style={{marginRight:'3px',}} required={ques.questionType}/>} label={
                                              <Typography style={{fontFamily:'Roboto,Arial,sans-serif',
                                            fontSize:'13px',
                                            fontWeight:'400',
                                            letterSpacing : ".2px",
                                            lineHeight:'20px',
                                            color:'#202124'}}>
                                                {ques.options[j].optiontext}
                                                </Typography>
                                          }/>
                                          </div>
                                      </div>

                              ))}

                              </div>
                ):""}   
                                        </AccordionSummary>*/}
                  <div className="question_boxes">
                      <AccordionDetails className="add_question">
                        <div className="add_question_top">
                            <input type="text" className="question" placeholder="Question" value={ques.questionText} onChange={(e)=>{changeQuestion(e.target.value, i)}}></input>
                            <CropOriginalIcon style={{color:"#5f6368"}} />
                            <Select className="select" style={{color:"#5f6368",fontSize:"13px"}}>
                                <MenuItem id="text" value="Text" onClick={()=>{addQuestionType(i,"text")}}><SubjectIcon style={{marginRight :"10px"}} /> Paragraph</MenuItem>
                                <MenuItem id="checkbox" value="Checkbox" onClick={()=>{addQuestionType(i,"checkbox")}}><CheckboxIcon style={{marginRight :"10px",color:"#70757a"}}  checked/> CheckBox </MenuItem>
                                <MenuItem id="radio" value="Radio" onClick={()=>{addQuestionType(i,"radio")}}><Radio style={{marginRight :"10px"}} checked/> Multiple Choice </MenuItem>
                            </Select>
                        </div>
                        {ques.options.map((op,j)=>(
                          <div className="add_question_body" key={j}>
                              {
                                  (ques.questionType!="text") ?
                                  <input type={ques.questionType} style={{marginRight:"10px"}}/>:
                                  <ShortTextIcon style={{marginRight:"10px"}}/>
                              }
                              <div>
                                  <input type="text" className="text_input" placeholder="option" value={ques.options[j].optiontext}></input>
                          </div>
                          <CropOriginalIcon style={{color:"#5f6368"}}/>
                          <IconButton aria-label="delete">
                              <CloseIcon/>
                          </IconButton>
                          </div>
                        ))
                        }
                        {ques.options.length < 5 ?(
                         <div className="add_question_body">
                             <FormControlLabel disabled control={
                                 (ques.questionType!="text")?
                                 <input type={ques.questionType} color="primary" inputProps={{'aria-label':'secondary checkbox'}}
                                   style={{marginLeft:"10px",marginRight:"10px"}}disabled/>:<ShortTextIcon style={{marginRight:"10px"}}/>
                             }label={
                                 <div>
                                     <input type="text" className="text_input" style={{fontSize:"13px",width:"60px"}} placeholder="Add other"></input>
                                     <Button size="small" style={{textTransform:'none',color:"#4285f4",fontSize:"13px",fontWeight:"600"}}>Add Option</Button>
                                 </div>
                             }/>
                            </div>
                        ):""}
                        <div className="add_footer">
                            <div className="add_question_bottom_left">
                           <Button size="small" style={{textTransform:'none',color:"#4285f4",fontSize:"13px",fontWeight:"600"}}>
                               <FcRightUp style={{border:"2px solid #4285f4",padding:"2px",marginRight:"8px"}}/>Answer key
                           </Button>
                           
                           </div>
                           <div className="add_question_bottom">
                               <IconButton aria-label="Copy">
                                   <FilterNoneIcon/>
                                </IconButton>
                                <IconButton aria-label="delete">
                                  <BsTrash/>     
                                </IconButton>
                                  <span style={{color:"#5f6368",fontSize:"13px"}}>Required</span><Switch name="checkedA" color="primary" checked/>
                                <IconButton>
                                    <MoreVertIcon/>
                                </IconButton>
                       
                        </div>
                        </div>
                      </AccordionDetails>
                      <divc className="question_edit">
                          <AddCircleOutline className="edit"/>
                          <OndemandVideoIcon className="edit"/>
                          <CropOriginalIcon className="edit"/>
                          <TextFieldsIcon className="edit"/>
                      </divc>
                  </div>
            </Accordion>
            </div>
        ))
    }
                

    return (
        <div>
        <div className="question_form">
            <br></br>
            <div className="section">
                <div className="question_title_section">
                    <div className="question_form_top">
                        <input type="text" className="question_form_top_name" style={{color:"black"}} placeholder="untitled document"></input> 
                        <input type="text" className="question_form_top_desc" placeholder="Add Form Description"></input>   

                    </div>
                </div>
               
               {questionsUI()}
            </div>
            </div>
        </div>
    )
}

export default Question_form
