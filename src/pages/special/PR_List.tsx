import { Box, Card } from '@mantine/core';
import { PR_Detail, PR_DetailProps } from './PR_Detail';

interface PR_ListProps {
    profiles: PR_DetailProps[];
}

export const PR_List = ({ profiles }: PR_ListProps) => {
    return (
        <Box style={{display : 'flex', gap: '100px' }}>
            {profiles.map((profile, index) => (
                <Card key={index} >
                    <PR_Detail {...profile} />
                </Card>
            ))}
        </Box>
    );
};