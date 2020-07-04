import {MDCTabScroller} from '@material/tab-scroller';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDrawer} from "@material/drawer";
import {MDCList} from "@material/list";

//System variables - Scheduling animation
let currentTherapistSchedule = null;
const scheduleButtons = document.querySelectorAll('.terapeuta-card-schedule-button');
const animatingClass = "schedule-form__animating-container--animating";
const animatingContainerClass = 'schedule-form__animating-container';
const scheduleFormHiddenClass = 'schedule-form--hidden';
const scheduleForm = document.querySelector('.schedule-form')

//System variables - Navbar elements
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const listEl = document.querySelector('.mdc-drawer .mdc-list');
const drawerElement = document.querySelector('.mdc-drawer');
const mainContentEl = document.querySelector('.home-content');

// Initialize either modal or permanent drawer

const initModalDrawer = () => {
    drawerElement.classList.add("mdc-drawer--modal");
    const drawer = MDCDrawer.attachTo(drawerElement);
    drawer.open = false;
    
    const topAppBar = MDCTopAppBar.attachTo(topAppBarElement);
    topAppBar.setScrollTarget(mainContentEl);
    topAppBar.listen('MDCTopAppBar:nav', () => {
      drawer.open = !drawer.open;
    });
  
    listEl.addEventListener('click', (event) => {
      drawer.open = false;
    });
    
    return drawer;
  }
  
  const initPermanentDrawer = () => {
    drawerElement.classList.remove("mdc-drawer--modal");
    const list = new MDCList(listEl);
    list.wrapFocus = true;
    return list;
  }
  
  let drawer = window.matchMedia("(max-width: 900px)").matches ?
      initModalDrawer() : initPermanentDrawer();
  
  // Toggle between permanent drawer and modal drawer at breakpoint 900px
  
  const resizeHandler = () => { 
    if (window.matchMedia("(max-width: 900px)").matches && drawer instanceof MDCList) {
      drawer.destroy();
      drawer = initModalDrawer();
    } else if (window.matchMedia("(min-width: 900px)").matches && drawer instanceof MDCDrawer) {
      drawer.destroy();
      drawer = initPermanentDrawer();
    }
  }
  window.addEventListener('resize', resizeHandler);


//Logic for calendar options

const removeSchedule = (card) => {
    const animatingSchedule = card.querySelector(`.${animatingContainerClass}`);

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