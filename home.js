import {MDCList} from '@material/list';

let currentTherapistSchedule = null;
const scheduleButtons = document.querySelectorAll('.terapeuta-card-schedule-button');
const animatingClass = "schedule-form__animating-container--animating";
const animatingContainerClass = 'schedule-form__animating-container';
const scheduleFormHiddenClass = 'schedule-form--hidden';
const scheduleForm = document.querySelector('.schedule-form');

new MDCList(document.querySelector('.mdc-list'));

const removeSchedule = (card) => {
    const animatingSchedule = card.querySelector(`.${animatingContainerClass}`);
    
    // cardActions.classList.remove(scheduleFormHiddenClass);
    
    // const cardActions = card.querySelector('.mdc-card__actions');
    // Use the following query selector when providing real options
    // cardActions.querySelector('.adopt-form__button-text').innerText = 'Adopt';
    // cardActions.querySelector('.adopt-form__button-icon').innerText = 'pets';

    animatingSchedule.classList.add(animatingClass);
    setTimeout(() => {
        if (!card) return;
        card.removeChild(scheduleForm);
        document.section.appendChild(scheduleForm);
        scheduleForm.classList.add(scheduleFormHiddenClass);
    }, 200);
}

const addSchedule = (card) => {
    const cardActions = card.querySelector('.mdc-card__actions');
    
    scheduleForm.classList.remove(scheduleFormHiddenClass);
    
    requestAnimationFrame(() => {
      card.insertBefore(scheduleForm, cardActions);
    
    // Use the following query selector when providing real options  
    // cardActions.querySelector('.schedule-form__button-text').innerText = 'Ver más Opciones';
    //   cardActions.querySelector('.adopt-form__button-icon').innerText = 'send';

    const animatingScheduleForm = card.querySelector(`.${animatingContainerClass}`);
  
      animatingScheduleForm.classList.add(animatingClass);
      requestAnimationFrame(() => {
        animatingScheduleForm.classList.remove(animatingClass);
      });
    });
    
}

const handleScheduleClick = (e) => {
    const card = e.target.closest('.mdc-card');
    
    if (currentTherapistSchedule) {
        removeSchedule(currentTherapistSchedule);
        if (currentTherapistSchedule === card) {
            currentTherapistSchedule = null;
            return
        }
    }
    currentTherapistSchedule = card;
    addSchedule(currentTherapistSchedule);
}

// Event listener for scheduling buttons
scheduleButtons.forEach(scheduleButton => {
    scheduleButton.addEventListener('click', handleScheduleClick);
});