import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="#"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              
               />

               <Education
                 
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              
              />

              <Experience
                
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;