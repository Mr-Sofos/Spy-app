import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectCategories } from '../../../redux/ducks/game';
import Dialog from '../../Dialog';
import DialogHeader from '../../Dialog/DialogHeader';
import DialogBody from '../../Dialog/DialogBody';
import ListItem from '../../ListItem';
import style from './style.module.css';
import Button from '../../Button';

function Words({ open, onClose }) {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.items);

  const selectedCategories = useSelector(
    (state) => state.game.selectedCategories,
  );

  const selectCategoryWords = (id) => {
    dispatch(selectCategories(id));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogHeader>Категории слов</DialogHeader>
      <DialogBody>
        {categories.map((category) => {
          const isSelected = selectedCategories.indexOf(category.id) !== -1;
          return (
            <ListItem
              key={category.id}
              onClick={() => selectCategoryWords(category.id)}
              subtitle="#"
            >
              <div className={style.categoriesWords}>
                <div>
                  <input type="checkbox" checked={isSelected} />
                </div>
                <div>{category.name}</div>
              </div>
            </ListItem>
          );
        })}
      </DialogBody>
      <Button onClick={() => onClose()}>Готово</Button>
    </Dialog>
  );
}

Words.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
};

export default Words;
