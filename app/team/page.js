import TeamMember from "../../components/TeamMember/TeamMember";
import React from "react";
import teamData from "./teamData";
import { Box, Container, Grid, Typography } from "@mui/material";
import PageWrapper from "../pageWrapper";

const Team = () => {
  return (
    <Box >
      <PageWrapper>
        <Container maxWidth="lg" sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h4" fontWeight="bold" align="center">
            Meet the Team
          </Typography>
          <Box
            sx={{
              width: "100%",
              marginTop: "2em",
              padding: 10,
              display: "flex",
              gap: 7,
              justifyContent: "center",
              overflowX: "auto",
            }}
          >
            {teamData().map((member) => {
              if (member.designation == "Technical Advisor") {
                return (
                  <TeamMember
                    name={member.name}
                    designation={member.designation}
                    imgUrl={member.imgUrl}
                  />
                );
              }
            })}
          </Box>
          
          {/* Mecha and SD Team */}
          <Box
            sx={{
              width: "100%",
              marginTop: "2em",
              padding: 10,
              display: "flex",
              gap: 7,
              overflowX: "auto",
            }}
          >
            {teamData().map((member) => {
              if (member.designation == "Mechanical and System Development") {
                return (
                  <TeamMember
                    name={member.name}
                    designation={member.designation}
                    imgUrl={member.imgUrl}
                  />
                );
              }
            })}
          </Box>
          
          {/* Dev or Robot Prog Team */}
          <Box
            sx={{
              width: "100%",
              marginTop: "2em",
              padding: 10,
              display: "flex",
              gap: 7,
              overflowX: "auto",
            }}
          >
            {teamData().map((member) => {
              if (member.designation.includes("Robot Programming")) {
                return (
                  <TeamMember
                    name={member.name}
                    designation={member.designation}
                    imgUrl={member.imgUrl}
                  />
                );
              }
            })}
          </Box>
        </Container>
      </PageWrapper>
    </Box>
  );
};

export default Team;
