import styled from 'styled-components';
import { Link } from 'gatsby';
export const SmallText = styled.div`
    font-size: 14.4px;
    line-height: 17px;
`

export const MediumText = styled.div`
    font-size: 14px;
    line-height: 16px;

    @media(min-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
`

export const BannerText = styled.div`
  font-size: 30px;
  line-height: 40px;

  @media(min-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
  @media(min-width: 992px) {
    font-size: 56px;
    line-height: 68px;
  }
`

export const LinkSized = styled(Link)`
  font-size: 14.4px;
  line-height: 17px;
  font-weight: 700;
  text-decoration: none;
`
