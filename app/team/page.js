import TeamMember from "../../components/TeamMember/TeamMember";
import React from "react";
import teamData from "./teamData";
import { Box, Container, Grid, Typography } from "@mui/material";
import PageWrapper from "../pageWrapper";

const Team = () => {
  return (
    <Box>
      <PageWrapper>
        <Container maxWidth="lg" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h4" fontWeight="bold" align="center">
            Meet the Team
          </Typography>
          <Container
            // alignItems="center"
            // justifyContent="center"
            sx={{
              width: "100%",
              marginTop: "2em",
              padding: 10,
              gap: 7,
              display: "flex",
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
          </Container>
          
          {/* Mecha and SD Team */}
          <Container
            alignItems="center"
            justifyContent="center"
            sx={{
              width: "100%",
              marginTop: "2em",
              padding: 10,
              gap: 7,
              display: "flex",
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
          </Container>
          
          {/* Dev or Robot Prog Team */}
          <Container
            alignItems="center"
            justifyContent="center"
            sx={{
              width: "100%",
              marginTop: "2em",
              padding: 10,
              gap: 7,
              display: "flex",
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
          </Container>
        </Container>
      </PageWrapper>
    </Box>
  );
};

export default Team;
