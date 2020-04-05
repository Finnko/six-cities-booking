import NameSpace from '../../name-space';
import {AuthorizationStatus} from '../../../const';

const NAME_SPACE = NameSpace.USER;

const getAuthStatus = (state) => state[NAME_SPACE].authorizationStatus === AuthorizationStatus.AUTH;
const getUserInfo = (state) => state[NAME_SPACE].userData;

export {getAuthStatus, getUserInfo};
