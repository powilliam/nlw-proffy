import React, { useMemo, memo, useCallback } from "react";
import { Image, ImageSourcePropType, Linking } from "react-native";

import { Classes } from "@proffy/network";
import api from "../../services/api";

import HeartOutline from "../../assets/images/icons/heart-outline.png";
import UnFavorite from "../../assets/images/icons/unfavorite.png";
import Whatsapp from "../../assets/images/icons/whatsapp.png";

import {
  Container,
  Profile,
  Avatar,
  ProfileInformation,
  TeacherName,
  TeacherSubject,
  Biography,
  Footer,
  Price,
  PriceValue,
  ButtonsGroup,
  FavoriteButton,
  ContactButton,
  ContactText,
} from "./styles";

export interface ClassCardProps {
  data: Classes;
}

const ClassCard: React.FC<ClassCardProps> = ({ data }) => {
  const teacherID = useMemo(() => data.teacher.id, [data]);
  const name = useMemo(() => data.teacher.name, [data]);
  const avatar = useMemo(() => data.teacher.avatar, [data]);
  const subject = useMemo(() => data.subject, [data]);
  const bio = useMemo(() => data.teacher.bio, [data]);
  const cost = useMemo(() => data.cost, [data]);
  const whatsapp = useMemo(() => data.teacher.whatsapp, [data]);
  const avatarSource = useMemo<ImageSourcePropType>(
    () => ({
      uri: avatar,
    }),
    [avatar]
  );

  const handleContactTeacher = useCallback(async () => {
    await api.createConnection(teacherID);
    Linking.openURL(`https://wa.me/${whatsapp}`);
  }, [whatsapp, teacherID]);

  return (
    <Container>
      <Profile>
        <Avatar source={avatarSource} />

        <ProfileInformation>
          <TeacherName>{name}</TeacherName>
          <TeacherSubject>{subject}</TeacherSubject>
        </ProfileInformation>
      </Profile>

      <Biography>{bio}</Biography>

      <Footer>
        <Price>
          Preço/hora {"  "} <PriceValue>R$ {cost}</PriceValue>
        </Price>

        <ButtonsGroup>
          <FavoriteButton favorited>
            <Image source={HeartOutline} />
          </FavoriteButton>
          <ContactButton onPress={handleContactTeacher}>
            <Image source={Whatsapp} />
            <ContactText>WhatsApp</ContactText>
          </ContactButton>
        </ButtonsGroup>
      </Footer>
    </Container>
  );
};

export default memo(ClassCard);
