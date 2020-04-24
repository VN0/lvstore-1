import React from "react";
import { Grid, Typography } from "@material-ui/core";
import WorkCard from "./WorkCard";
import "typeface-roboto";
const Works = ({ pageRef, gridItems }) => {
  var items = undefined;
  if (gridItems === 2) {
    items = (
      <>
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
        >
          {[
            {
              name: "Flames",
              desc:
                "Flames is all about fun!!.\nIt is a love calculator, a game and a love tester which can be played by anybody. The app just needs your name and your partner’s name.",
              downloadLink:
                "https://play.google.com/store/apps/details?id=com.amsavarthan.game.flames",
              gitLink: "https://github.com/lvamsavarthan/Flames",
            },
            {
              name: "Hify",
              desc:
                "Hify is an Open Source social network which is powered by Google's Firebase. Share updates and photos, engage with friends and other users worldwide and stay connect to the world.",
              downloadLink:
                "https://play.google.com/store/apps/details?id=com.amsavarthan.social.hify",
              gitLink: "https://github.com/lvamsavarthan/hify",
            },
          ].map((e) => (
            <WorkCard {...e} />
          ))}
        </Grid>
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
        >
          {[
            {
              name: "Media Toolbox",
              desc:
                "The all in one ad-free toolkit for social media in a single app. It contains tools for WhatsApp, Instagram and YouTube. Much more will be added in upcoming releases",
              downloadLink:
                "https://drive.google.com/file/d/12lVvmbFSeamNswL4bPdwPxpCnlxMuOa5/view?usp=sharing",
              gitLink: "https://github.com/lvamsavarthan/Media-Toolbox",
            },
            {
              name: "Posizione",
              desc:
                "Posizione simplifies life in the digital world by making it easy to stay connected to the people who matter most. Posizione will be useful for parents as they can track their children.",
              downloadLink:
                "https://play.google.com/store/apps/details?id=com.amsavarthan.posizione",
              gitLink: "https://github.com/lvamsavarthan/posizione",
            },
          ].map((e) => (
            <WorkCard {...e} />
          ))}
        </Grid>
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
        >
          {[
            {
              name: "Paruvaththe Payir Sei",
              desc:
                "Paruvaththe Payir Sei (PPS) is a Q&A platform to share and gain knowledge. This app is specially made for students to improve their questioning ability. Students could spend their quality time here in spite of wasting them on social media.",
              downloadLink:
                "https://play.google.com/store/apps/details?id=com.amsavarthan.pps",
              gitLink: "",
            },
            {
              name: "Trivia",
              desc:
                "Trivia is a free quiz game. It is an easy to play trivia app but at the same time it is an excellent brain game. Try the game and you will be able to give your brain a immaculate boost by addictive thinking and IQ challenge!",
              downloadLink:
                "https://play.google.com/store/apps/details?id=com.amsavarthan.game.trivia",
              gitLink: "https://github.com/lvamsavarthan/Trivia",
            },
          ].map((e) => (
            <WorkCard {...e} />
          ))}
        </Grid>
      </>
    );
  } else if (gridItems === 3) {
    items = (
      <>
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
        >
          {[
            {
              name: "Flames",
              desc:
                "Flames is all about fun!!.\nIt is a love calculator, a game and a love tester which can be played by anybody. The app just needs your name and your partner’s name.",
              downloadLink:
                "https://play.google.com/store/apps/details?id=com.amsavarthan.game.flames",
              gitLink: "https://github.com/lvamsavarthan/Flames",
            },
            {
              name: "Hify",
              desc:
                "Hify is an Open Source social network which is powered by Google's Firebase. Share updates and photos, engage with friends and other users worldwide and stay connect to the world.",
              downloadLink:
                "https://play.google.com/store/apps/details?id=com.amsavarthan.social.hify",
              gitLink: "https://github.com/lvamsavarthan/hify",
            },
            {
              name: "Media Toolbox",
              desc:
                "The all in one ad-free toolkit for social media in a single app. It contains tools for WhatsApp, Instagram and YouTube. Much more will be added in upcoming releases",
              downloadLink:
                "https://drive.google.com/file/d/12lVvmbFSeamNswL4bPdwPxpCnlxMuOa5/view?usp=sharing",
              gitLink: "https://github.com/lvamsavarthan/Media-Toolbox",
            },
          ].map((e) => (
            <WorkCard {...e} />
          ))}
        </Grid>
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
        >
          {[
            {
              name: "Posizione",
              desc:
                "Posizione simplifies life in the digital world by making it easy to stay connected to the people who matter most ❤️. Posizione will be especially useful for parents as they can track their children from home or office itself.",
              downloadLink:
                "https://play.google.com/store/apps/details?id=com.amsavarthan.posizione",
              gitLink: "https://github.com/lvamsavarthan/posizione",
            },
            {
              name: "Paruvaththe Payir Sei",
              desc:
                "Paruvaththe Payir Sei (PPS) is a Q&A platform to share and gain knowledge. This app is specially made for students to improve their questioning ability. Students could spend their quality time here in spite of wasting them on social media.",
              downloadLink:
                "https://play.google.com/store/apps/details?id=com.amsavarthan.pps",
              gitLink: "",
            },
            {
              name: "Trivia",
              desc:
                "Trivia is a free quiz game. It is an easy to play trivia app but at the same time it is an excellent brain game. Try the game and you will be able to give your brain a immaculate boost by addictive thinking and IQ challenge!",
              downloadLink:
                "https://play.google.com/store/apps/details?id=com.amsavarthan.game.trivia",
              gitLink: "https://github.com/lvamsavarthan/Trivia",
            },
          ].map((e) => (
            <WorkCard {...e} />
          ))}
        </Grid>
      </>
    );
  }
  return (
    <div className="container" ref={pageRef}>
      <Typography
        style={{
          color: "#FFF",
          textAlign: "center",
          padding: "40px",
          fontSize: "32",
        }}
        variant="h2"
        component="p"
      >
        Projects
      </Typography>
      <Grid container>{items}</Grid>
    </div>
  );
};

export default Works;
