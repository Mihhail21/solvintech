import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFromApi } from '../redux/actions/thunk/thunk';
import UserCard from '../components/UserCard/UserCard';
import { users } from '../assets/data';
import CentralizingBlock from './../components/CentralizingBlock/CentralizingBlock';
import LoadMoreButton from './../components/LoadMoreButton/LoadMoreButton';
import AlignCards from '../components/AlignCards/AlignCards';

const Main = () => {
  const usersRedux = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [visibleNumberCards, setVisibleNumberCards] = React.useState(4);

  React.useEffect(() => {
    dispatch(getUsersFromApi());
  });

  return (
    <CentralizingBlock>
      <AlignCards>
        {users && users.slice(0, visibleNumberCards).map(user => <UserCard key={user._id} user={user} />)}
      </AlignCards>
      <LoadMoreButton setVisibleNumberCards={setVisibleNumberCards} />
    </CentralizingBlock>
  );
};

export default Main;
