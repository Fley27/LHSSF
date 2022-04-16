import React, {useState, useRef, useEffect} from "react"
import autosize from "autosize";
import styles from "../../styles/Question-with-multiple-choice.module.css"

export const QuestionWithDirectAnswer = () =>{
    const [answer, setAnswer] = useState("");

    const textarea = useRef("");

    useEffect(() => {
        textarea.current.focus();
        autosize(textarea.current);
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (e.key !== "Enter") {
            setAnswer(value)
        }else
            alert("kkk")
    }

    const convert = () => {	

        var text_input; //store input after beging trim()med
        var output_html=""; //store output
        var counter;	
        
        text_input=answer.trim(); //trim() input
        if(text_input.length > 0){
            output_html+="<p>"; //begin by creating paragraph
            for(counter=0; counter < text_input.length; counter++){
                switch (text_input[counter]){
                    case '\n':
                        if (text_input[counter+1]==='\n'){
                            output_html+="</p>\n<p>";
                            counter++;
                        }
                        else output_html+="<br/>";			
                        break;
                    
                    case ' ':
                        if(text_input[counter-1] != ' ' && text_input[counter-1] != '\t')
                            output_html+=" ";														
                        break;
                        
                    case '\t':
                        if(text_input[counter-1] != '\t')
                            output_html+=" ";
                        break;
                    
                    case '&':
                        output_html+="&amp;";
                        break;
                    
                    case '"':
                        output_html+="&quot;";
                        break;
                    
                    case '>':
                        output_html+="&gt;";
                        break;
                    
                    case '<':
                        output_html+="&lt;";
                        break;				
                    
                    default:
                        output_html+=text_input[counter];
                        
                }
                        
            }
            output_html+="</p>"; //finally close paragraph
        }
        return output_html;
    }

    return(
        <div className = {styles.container}>
            <div className = {styles.question}>Write everything that you can heard.</div>
            <div><iframe width="300" height="60" src="https://vocaroo.com/embed/1l8y8WMfbHYy?autoplay=0" frameborder="0" allow="autoplay"></iframe></div>
            <div className = {styles.answers}>
                <textarea onChange = {handleChange} value = {answer} rows = {1} ref = {textarea} name = "answer"  className = {`${styles.answer} ${styles.textarea}`}/>
            </div>
            <button onClick = {()=> convert()}>
                OK
            </button>
            <div dangerouslySetInnerHTML={{ __html: convert() }}/>
        </div>
    )
}

