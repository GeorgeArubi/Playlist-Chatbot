//initialMessages property contains chatbot message objects
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "DOGHOUSETV",
  initialMessages: [
    createChatBotMessage("Hello Human"),
  ],
 widgets: [
     {
     	widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
     },
    {
      widgetName: "recents",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "[000].",
            url: "https://open.spotify.com/playlist/1ipj4KhuYfLyeyr9vG7E6A?si=oiwwc4obSVqGPdi0p-kkXA",
            id: 1,
          },
          {
            text: "I Don't Know What To Call You, But You Make Me Feel Good...",
            url: "https://open.spotify.com/playlist/04rG4KAC8lM5qmZIHfzJof?si=ZunLcCqVQQajpxDAzRpdjw",
            id: 2,
          },
          {
            text: "Of Truth & Juxtaposition",
            url: "https://open.spotify.com/playlist/3tvJsMAKDhCLZlGJxH4mD1?si=v6HNkvK8T7GvaWK8dwYkhQ",
            id: 3,
          },
        ],
      },
     },
     {
      widgetName: "love",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Meadow Music",
            url: "https://open.spotify.com/playlist/7GYbxlNnEGPeD86fQKzQCt?si=C4gLiM_JQ8-QgHmogNCV4Q",
            id: 1,
          },
          {
            text: "Another Love/Hate Playlist",
            url: "https://open.spotify.com/playlist/02NrfpkVPsaQQyo48EUaBx?si=Y5kOG4r2TnCHxclGSdLi_g",
            id: 2,
          },
          {
            text: "Love Is Love/Love Is Hate",
            url: "https://open.spotify.com/playlist/4Xx47LYU9cn8ld6tuioLXv?si=vaFdvCrdSW6mXQvNNpMMjw",
            id: 3,
          },
        ],
      },
     },
     {
      widgetName: "drive",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Viva La Muerte",
            url: "https://open.spotify.com/playlist/2w0UIBth3OfD0KaPPcUAGe?si=ym0g768CTSmKOjoQNsEW5Q",
            id: 1,
          },
          {
            text: "PseudoAlchemy",
            url: "https://open.spotify.com/playlist/2eaaT7LfCFYaxc62XDjBL2?si=0c3dCbGBSSOTOoi1E1yRHQ",
            id: 2,
          },
          {
            text: "To Only Be Free",
            url: "https://open.spotify.com/playlist/25KdtFXksMZ6fD1ml6FB4J?si=XNQnip2PRvmvTsrnvyFehg",
            id: 3,
          },
        ],
      },
     },
     {
      widgetName: "upbeat",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Made In Lagos",
            url: "https://open.spotify.com/playlist/6UHXaDvv5UeTyftXsJkOwN?si=6iVxAsIPQm2KMBc3rluD0Q",
            id: 1,
          },
          {
            text: "House Mix Vol. 1",
            url: "https://open.spotify.com/playlist/0tOFJr7pNzkOesSn42JfPR?si=C_NcVap_TXCm1mTt-mTQ0w",
            id: 2,
          },
          {
            text: "Don't Be A Hero",
            url: "https://open.spotify.com/playlist/1AZpiUANyjc6tBp6BEAkPX?si=UZhME1k4SeONyUu5B8fT8A",
            id: 3,
          },
        ],
      },
     },
     {
      widgetName: "surprises",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "[004].",
            url: "https://open.spotify.com/playlist/5BnWGnUkYjbgoRHaZ9KR2o?si=jm1ZGY4gQ6C9bTt33Rkhdg",
            id: 1,
          },
          {
            text: "The Playlist About The Journey",
            url: "https://open.spotify.com/playlist/47E4W78gH9PsAYhHId4WzJ?si=As2UObjTSA68v3iB006rAA",
            id: 2,
          },
          {
            text: "NOBADKARMA",
            url: "https://open.spotify.com/playlist/1FXuPom1km8RCEosyZRx96?si=Fe8mbrZxSVWQnmkGBoYuYw",
            id: 3,
          },
        ],
      },
     },
 ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#30F",
    },
    chatButton: {
      backgroundColor: "#30F",
    }
  }
}

export default config