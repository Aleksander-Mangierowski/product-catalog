import React, { Component } from 'react';
import styled from 'styled-components';

import { CardWrp } from '../../styles';


class AsideCard extends Component {
    render() {
        return (
            <AsideCardWrp>
                <a href="https://codepen.io/Mangierowski/" target="_blank"></a>

                <div className="card-img">
                    <img src="https://ejjnng.dm2302.livefilestore.com/y4moNLOz6R3_l-Tu0BeS2bcQmXDX4D7MeunPWOr_Y_s60a2L7ZEi59ofNGk-Ed8jq1KsCeNNiZzvzGavIJ2Jtmhqf8jC6o23iGqMrPYJT81n8EFieydc6dApYxLj4oI0WHRMwaWviYJkVI8BOOFNWG2lXlWHxUP11PCx5KIkn3m4Q_kopBgOF05yuNzfUsvYIUNI-gsOVXvIZMjKJnWcEce5A?width=960&height=1280&cropmode=none"
                        alt="My profile photo" />
                </div>

                <div className="card-body">
                    <div className="card-title">Mangierowski Aleksander</div>

                    <div className="card-date">20 Oct 1982</div>

                    <div className="card-description">
                        Front-End Developer with practical experience in project management, branding strategy and creative direction devoted to
                        functional programming and information architecture.
                        </div>
                </div>
            </AsideCardWrp>
        );
    }
}

export default AsideCard;


const AsideCardWrp = styled(CardWrp)`
    height: initial;
    margin-top: 40px;
`;

