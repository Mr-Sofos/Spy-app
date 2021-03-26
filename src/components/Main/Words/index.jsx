import React from 'react';
import Dialog from '../../Dialog';
import DialogHeader from '../../Dialog/DialogHeader';
import DialogBody from '../../Dialog/DialogBody';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from '../../ListItem';
import style from './../Words/style.module.css';
import { selectCategories } from '../../../redux/ducks/game';
import Button from '../../Button';

function Words(props) {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.items);

  const selectedCategories = useSelector(state => state.game.selectedCategories)

  const selectCategoryWords = (id) => {
    dispatch(selectCategories(id));
  };

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogHeader>Категории слов</DialogHeader>
      <DialogBody>
        {categories.map((category) => {
          const isSelected = selectedCategories.indexOf(category.id) !== -1
          return (
            <ListItem
              key={category.id}
              onClick={() => selectCategoryWords(category.id)}
            >
              <div className={style.categoriesWords}>
                <div>
                  <input type='checkbox' checked={isSelected} />
                </div>
                <div>
                  {category.name}
                </div>
              </div>
            </ListItem>
          );
        })}
      </DialogBody>
      <Button onClick={() => props.onClose()}>
        Готово
      </Button>
    </Dialog>
  );
}

export default Words;
