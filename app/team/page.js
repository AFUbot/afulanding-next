import TeamMember from "../../components/TeamMember/TeamMember";
import React from "react";
import teamData from "./teamData";
import { Box, Container, Grid, Typography } from "@mui/material";
import PageWrapper from "../pageWrapper";

const Team = () => {
  return (
    <Box>
      <PageWrapper>
        <Container
          maxWidth="lg"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
              overflowX: "auto",
            }}
          >
            {teamData().map((member) => {
              if (member.designation == "Technical Advisor") {
                return (
                  <Box style={{ margin: "0 auto" }}>
                    <TeamMember
                      name={member.name}
                      designation={member.designation}
                      imgUrl={member.imgUrl}
                    />
                  </Box>
                );
              }
            })}
          </Box>

          {/* Mecha and SD Team */}
          <Box
            sx={{
              width: "100%",
              padding: 10,
              display: "flex",
              gap: 7,
              overflowX: "auto",
            }}
          >
            {teamData().map((member) => {
              if (member.designation == "Mechanical and System Design") {
                return (
                  <Box style={{ margin: "0 auto" }}>
                    <TeamMember
                      name={member.name}
                      designation={member.designation}
                      imgUrl={member.imgUrl}
                    />
                  </Box>
                );
              }
            })}
          </Box>

          {/* Dev or Robot Prog Team */}
          <Box
            sx={{
              width: "100%",
              padding: 10,
              display: "flex",
              gap: 7,
              overflowX: "auto",
            }}
          >
            {teamData().map((member) => {
              if (
                member.designation.includes("Robot Programming") ||
                member.designation.includes("Dev Team")
              ) {
                return (
                  <Box style={{ margin: "0 auto" }}>
                    <TeamMember
                      name={member.name}
                      designation={member.designation}
                      imgUrl={member.imgUrl}
                    />
                  </Box>
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
