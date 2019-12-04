import styled from 'styled-components';
import { IonAvatar } from '@ionic/react';

export const Wrap = styled.div`
    position: absolute;
    left: 5%;
    top: 32%;
    width: 90%;
`;

export const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    /* margin-top: 10%; */
`;

export const Avatar = styled(IonAvatar)`
    width: 40%;
    height: 40%;
`;
