import React, { useState } from 'react';
import helpImg from '../../../assets/help.svg';
import style from './style.module.css';
import DialogHeader from '../../Dialog/DialogHeader';
import DialogTitle from '../../Dialog/DialogTitle';
import DialogBody from '../../Dialog/DialogBody';
import Dialog from '../../Dialog';

function Help() {
  const [dialog, setDialog] = useState(false);

  const handleClickOpen = () => {
    setDialog(true);
  };

  const closeDialog = () => {
    setDialog(false);
  };

  return (
    <>
      <div className={style.help} onClick={handleClickOpen}>
        <img src={helpImg} alt="#" />
      </div>

      <Dialog open={dialog} onClose={closeDialog}>
        <DialogHeader>
          <DialogTitle>Правила игры</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <h3>С чего начать?</h3>
          <p>
            Выберите условия игры: количество игроков, количество Шпионов,
            категорию слов и время игры. Кстати, вы также можете выбрать язык
            игры и играть на своём родном языке или практиковать иностранный с
            друзьями!
          </p>
          <h3>И что дальше?</h3>
          <p>
            В игре есть два вида ролей: местные и Шпионы. Чтобы каждый узнал
            свою роль, передайте телефон по очереди каждому из игроков.
          </p>
          <h3>А другой игрок не увидит мою роль?</h3>
          <p>
            Не волнуйся, не увидит :) Когда ты нажмешь на карточку, она
            перевернется. На обратной стороне тебе либо сообщат локацию, либо
            обрадуют новостью, что ты Шпион. После нажми на карточку ещё раз,
            она скроется, и ты увидишь обложку следующей карточки. Тогда передай
            телефон другому игроку, чтобы он её перевернул и узнал свою роль.
          </p>
          <h3>Как играть?</h3>
          <p>
            Скажи: "Я знаю, кто Шпион". И тогда на счет три все игроки должны
            указать на того человека, кто по их мнению, Шпион.
            Если все выбрали одного и тогоже игрока, то он должен раскрыть свою
            роль. Если он оказывается местным - Шпион выигрывает. Если же этот
            человек действительно Шпион - выигрывают местные. Если игроки указали
            на разных людей, то игра продолжается.
          </p>
        </DialogBody>
      </Dialog>
    </>
  );
}

export default Help;
