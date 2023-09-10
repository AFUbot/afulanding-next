import TeamMember from "../../components/TeamMember/TeamMember";
import React from "react";
import teamData from "./teamData";
import { Box, Grid, Typography } from "@mui/material";
import PageWrapper from "../pageWrapper";

const Team = () => {
  return (
    <Box>
      <PageWrapper>
        <Typography variant="h4" fontWeight="bold" align="center">
          Meet the Team
        </Typography>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%", marginTop: "2em", padding: 10, gap: 7 }}
        >
          {teamData().map((member) => (
            <Grid item>
              <TeamMember
                name={member.name}
                designation={member.designation}
                imgUrl={member.imgUrl}
              />
            </Grid>
          ))}
        </Grid>
      </PageWrapper>
    </Box>
  );
};

export default Team;
