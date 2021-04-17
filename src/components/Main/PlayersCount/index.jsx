import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setPlayers } from '../../../redux/ducks/game';
import Dialog from '../../Dialog';
import DialogHeader from '../../Dialog/DialogHeader';
import DialogBody from '../../Dialog/DialogBody';
import List from '../../List';
import ListItem from '../../ListItem';

function PlayersCount({ onClose, open }) {
  const players = Array(48)
    .fill(0)
    .map((_, i) => i + 3);

  const dispatch = useDispatch();

  const selectPlayersCount = (count) => {
    dispatch(setPlayers(count));

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogHeader>Количество игроков</DialogHeader>
      <DialogBody>
        <List>
          {players.map((player) => (
            <ListItem
              key={player.toString()}
              onClick={() => selectPlayersCount(player)}
            >
              {player}
            </ListItem>
          ))}
        </List>
      </DialogBody>
    </Dialog>
  );
}

PlayersCount.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
};

export default PlayersCount;
