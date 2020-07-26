import React from "react";
import {index} from "../../../config/pluginsInit";
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import theme from '../../../config/theme';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import {Input} from 'reactstrap';
const today = new Date();
  const getDate = (type, start, value, operator) => {
    start = new Date(start);
    type = type.charAt(0).toUpperCase() + type.slice(1);

    if (operator === '+') {
      start[`set${type}`](start[`get${type}`]() + value);
    } else {
      start[`set${type}`](start[`get${type}`]() - value);
    }

    return start;
  };
class Index extends React.Component{
  ref = React.createRef();
    constructor(props) {
        super(props);
        this.state={
          dateRange: '',
          view: 'week',
          month:'',
          viewModeOptions: [
            {
              title: 'Monthly',
              value: 'month'
            },
            {
              title: 'Weekly',
              value: 'week'
            },
            {
              title: 'Daily',
              value: 'day'
            }
          ]
        }
    }

    componentDidMount() {
        setTimeout(function () {
            index();
        },800);
        this.calendarInst = this.ref.current.getInstance();
        this.setState({view: this.props.view});
  
        this.setRenderRangeText();
    }
    onAfterRenderSchedule(res) {
      console.group('onAfterRenderSchedule');
      console.log('Schedule Info : ', res.schedule);
      console.groupEnd();
    }

    onBeforeDeleteSchedule(res) {
      console.group('onBeforeDeleteSchedule');
      console.log('Schedule Info : ', res.schedule);
      console.groupEnd();

      const {id, calendarId} = res.schedule;

      this.calendarInst.deleteSchedule(id, calendarId);
    }

    onChangeSelect(ev) {
      this.setState({view: ev.target.value});

      this.setRenderRangeText();
    }

    onClickDayname(res) {
      // view : week, day
      console.group('onClickDayname');
      console.log(res.date);
      console.groupEnd();
    }

    onClickNavi(event) {
      if (event.target.tagName === 'BUTTON') {
        const {target} = event;
        let action = target.dataset ? target.dataset.action : target.getAttribute('data-action');
        action = action.replace('move-', '');

        this.calendarInst[action]();
        this.setRenderRangeText();
      }
    }

    onClickSchedule(res) {
      console.group('onClickSchedule');
      console.log('MouseEvent : ', res.event);
      console.log('Calendar Info : ', res.calendar);
      console.log('Schedule Info : ', res.schedule);
      console.groupEnd();
    }

    onClickTimezonesCollapseBtn(timezonesCollapsed) {
      // view : week, day
      console.group('onClickTimezonesCollapseBtn');
      console.log('Is Collapsed Timezone? ', timezonesCollapsed);
      console.groupEnd();

      const theme = {};
      if (timezonesCollapsed) {
        theme['week.daygridLeft.width'] = '200px';
        theme['week.timegridLeft.width'] = '200px';
      } else {
        theme['week.daygridLeft.width'] = '100px';
        theme['week.timegridLeft.width'] = '100px';
      }

      this.calendarInst.setTheme(theme);
    }

    setRenderRangeText() {
      const view = this.calendarInst.getViewName();
      const calDate = this.calendarInst.getDate();
      const rangeStart = this.calendarInst.getDateRangeStart();
      const rangeEnd = this.calendarInst.getDateRangeEnd();
      let year = calDate.getFullYear();
      let month = calDate.getMonth() + 1;
      let date = calDate.getDate();
      let dateRangeText = '';
      let endMonth, endDate, start, end;

      switch (view) {
        case 'month':
          dateRangeText = `${year}-${month}`;
          break;
        case 'week':
          year = rangeStart.getFullYear();
          month = rangeStart.getMonth() + 1;
          date = rangeStart.getDate();
          endMonth = rangeEnd.getMonth() + 1;
          endDate = rangeEnd.getDate();

          start = `${year}-${month < 10 ? '0' : ''}${month}-${date < 10 ? '0' : ''}${date}`;
          end = `${year}-${endMonth < 10 ? '0' : ''}${endMonth}-${
            endDate < 10 ? '0' : ''
          }${endDate}`;
          dateRangeText = `${start} ~ ${end}`;
          break;
        default:
          dateRangeText = `${year}-${month}-${date}`;
      }

      this.setState({dateRange: dateRangeText});
    }

    onBeforeUpdateSchedule(event) {
      const {schedule} = event;
      const {changes} = event;

      this.calendarInst.updateSchedule(schedule.id, schedule.calendarId, changes);
    }

    onBeforeCreateSchedule(scheduleData) {
      const {calendar} = scheduleData;
      const schedule = {
        id: String(Math.random()),
        title: scheduleData.title,
        isAllDay: scheduleData.isAllDay,
        start: scheduleData.start,
        end: scheduleData.end,
        category: scheduleData.isAllDay ? 'allday' : 'time',
        dueDateClass: '',
        location: scheduleData.location,
        raw: {
          class: scheduleData.raw['class']
        },
        state: scheduleData.state
      };

      if (calendar) {
        schedule.calendarId = calendar.id;
        schedule.color = calendar.color;
        schedule.bgColor = calendar.bgColor;
        schedule.borderColor = calendar.borderColor;
      }

      this.calendarInst.createSchedules([schedule]);
    }

    render() {
      const {view, viewModeOptions} = this.state;
      const selectedView = view || this.props.view;
        return (
            <>
              <div className="fc-toolbar fc-header-toolbar">
                  <div className="fc-left">
                      <div className="fc-button-group">
                          <button type="button" className="fc-prev-button btn btn-primary mr-2" aria-label="prev"  data-action="move-prev" onClick={this.onClickNavi.bind(this)}>
                            <span className="fc-icon fc-icon-chevron-left"></span>
                          </button>
                          <button type="button" className="fc-next-button btn btn-primary mr-2" aria-label="next" data-action="move-next" onClick={this.onClickNavi.bind(this)}>
                            <span className="fc-icon fc-icon-chevron-right"></span>
                          </button>
                      </div>
                        <button type="button" className="fc-today-button btn btn-primary mr-2" data-action="move-today" onClick={this.onClickNavi.bind(this)} disabled="">today</button>
                  </div>
                  <div className="fc-center">
                      <h2 className="text-center">March 2020</h2>
                  </div>
                 <div className="fc-right">
                    <div className="fc-button-group">
                        <Input type="select" onChange={this.onChangeSelect.bind(this)} value={view} className="input-select">
                            {viewModeOptions.map((option, index) => (
                              <option value={option.value} key={index}>
                                {option.title}
                              </option>
                            ))}
                        </Input>
                      
                    </div>
                  </div>
              </div>
           
          
     
              <Calendar 
                usageStatistics={false}
                calendars={[
                  {
                    id: '0',
                    name: 'Private',
                    bgColor: '#9e5fff',
                    borderColor: '#9e5fff'
                  },
                  {
                    id: '1',
                    name: 'Company',
                    bgColor: '#00a9ff',
                    borderColor: '#00a9ff'
                  }
                ]}
                defaultView="month"
                disableDblClick={true}
                height="900px"
                isReadOnly={false}
                month={{
                  startDayOfWeek: 0
                }}
                schedules={[
                  {
                    id: '1',
                    calendarId: '0',
                    title: 'TOAST UI Calendar Study',
                    category: 'time',
                    dueDateClass: '',
                    start: today.toISOString(),
                    end: getDate('hours', today, 3, '+').toISOString()
                  },
                  {
                    id: '2',
                    calendarId: '0',
                    title: 'Practice',
                    category: 'milestone',
                    dueDateClass: '',
                    start: getDate('date', today, 1, '+').toISOString(),
                    end: getDate('date', today, 1, '+').toISOString(),
                    isReadOnly: true
                  },
                  {
                    id: '3',
                    calendarId: '0',
                    title: 'FE Workshop',
                    category: 'allday',
                    dueDateClass: '',
                    start: getDate('date', today, 2, '-').toISOString(),
                    end: getDate('date', today, 1, '-').toISOString(),
                    isReadOnly: true
                  },
                  {
                    id: '4',
                    calendarId: '0',
                    title: 'Report',
                    category: 'time',
                    dueDateClass: '',
                    start: today.toISOString(),
                    end: getDate('hours', today, 1, '+').toISOString()
                  }
                ]}
                scheduleView
                taskView
                template={{
                  milestone(schedule) {
                    return `<span style="color:#fff;background-color: ${schedule.bgColor};">${
                      schedule.title
                    }</span>`;
                  },
                  milestoneTitle() {
                    return 'Milestone';
                  },
                  allday(schedule) {
                    return `${schedule.title}<i className="fa fa-refresh"></i>`;
                  },
                  alldayTitle() {
                    return 'All Day';
                  }
                }}
                theme={theme}
                timezones={[
                  {
                    timezoneOffset: 540,
                    displayLabel: 'GMT+09:00',
                    tooltip: 'Seoul'
                  },
                  {
                    timezoneOffset: -420,
                    displayLabel: 'GMT-08:00',
                    tooltip: 'Los Angeles'
                  }
                ]}
                useDetailPopup
                useCreationPopup
                view={selectedView}
                week={{
                  showTimezoneCollapseButton: true,
                  timezonesCollapsed: false
                }}
                ref={this.ref}
                onAfterRenderSchedule={this.onAfterRenderSchedule.bind(this)}
                onBeforeDeleteSchedule={this.onBeforeDeleteSchedule.bind(this)}
                onClickDayname={this.onClickDayname.bind(this)}
                onClickSchedule={this.onClickSchedule.bind(this)}
                onClickTimezonesCollapseBtn={this.onClickTimezonesCollapseBtn.bind(this)}
                onBeforeUpdateSchedule={this.onBeforeUpdateSchedule.bind(this)}
                onBeforeCreateSchedule={this.onBeforeCreateSchedule.bind(this)}
          />
            </>
        )
    }
}

export default Index;