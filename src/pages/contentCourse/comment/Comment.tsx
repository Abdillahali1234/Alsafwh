import { Box, Grid, GridCol } from '@mantine/core';
import React, { useState } from 'react'
import { Form } from 'react-router-dom';

export default function Comment() {

	const [skills, setSkills] = useState("");

	const [allSkills, setAllSkills] = useState([]);


    const onAddSkillsHandler = () => {

		if (skills) {
			// Check if the skill already exists
			const skillExists = allSkills.some((skill) => skill.title === skills);
			if (!skillExists) {
				setAllSkills([...allSkills,  skills]); // Use skill title as ID
			}
			setSkills("");
		} else {
			return;
		}
	};

	const deleteSkillHandler = (skillTitle) => {
		let data = allSkills.filter((skill) => skill.title||skill!== skillTitle);
		setAllSkills(data);
	};

    const generateRandomId = () => {
		return Math.floor(Math.random() * 1000000);
	};


  return (
    

    <Box>


<Form  className="mb-3">

    <Grid>

							<Grid.Col >
								<label>Skills</label>
							</Grid.Col>
							<Grid.Col >
								<Form
									value={skills}
									onChange={(e) => setSkills(e.target.value)}
								/>
							</Grid.Col>
							<Grid.Col >
								<button
									className="btn btn-success add-skill-btn"
									type="button"
									onClick={onAddSkillsHandler}
								>
									Add
								</button>
							</Grid.Col>
    </Grid>
						</Form>

                        <div className="skills">
							<ul className="privateUl">
								{allSkills &&
									allSkills.map((single) => (
										<li className="privateLi"
											key={generateRandomId()}
											onClick={() => deleteSkillHandler(single)}
										>
											{single.title?single.title:single}
											<span className="delete-skill">Delete</span>
										</li>
									))}
							</ul>
						</div>
    </Box>
  )
}
