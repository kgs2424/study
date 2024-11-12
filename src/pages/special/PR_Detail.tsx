import { Box, Text } from '@mantine/core';

// 개인 프로필 상세내용
// 이름, 나이, 자격증[], 진행한 프로젝트[ 플젝이름, 기간, 사용기술, 역할 ]
export interface PR_DetailProps {
    name : string;
    age : number;
    certs : string[];
    history : ProjectHistory[];
};

// 프로젝트 상세내용( 플젝이름, 기간, 사용기술, 역할 ) 
interface ProjectHistory {
    projectName : string;
    period : string;
    technologies : string[];
    role : string[];
};


export const PR_Detail = ({name, age, certs, history } : PR_DetailProps) => {

    return(
        <Box>
            <h3> {name} </h3>
            <Text>
                <b>나이 : {age}</b>
            </Text>
            <Text>
                <b>
                자격증 : </b>{
                certs.length > 0 ? 
                ( 
                    certs.map( (cert,index ) => (<span key={index}>{cert}{index < certs.length-1 ? ', ': ''} </span> )) 
                )
                : 
                ( 
                    <span> </span> 
                )
                }
            </Text>
            <Text>
                <b>프로젝트 내역</b>
            </Text>
            {
                history.length > 0 ? 
                (
                    history.map( (project, index )=>(
                        <Box key={index}>
                            <Text>{project.projectName}</Text>{project.period}
                            <Text>역할 : {project.role.join(', ')}</Text>
                            <Text>기술 : {project.technologies.join(', ')}</Text>
                        </Box>
                    ))
                )
                :
                ( <span> </span> )
            }

        </Box>
    );
};
