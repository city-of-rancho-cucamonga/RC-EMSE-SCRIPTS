
if (AInfo['Technical Review Committee'] != 'CHECKED') {
	setTask('Technical Review Committee','N','N');
	for (x in wfTasksArray)        if (wfTasksArray[x].getProcessCode() == 'PLN_DESIGNREVIEW_COMMTECH')            setTask(x,'N','N','PLN_DESIGNREVIEW_COMMTECH');
	}

if (AInfo['Design Review Committee'] != 'CHECKED') {
	setTask('Design Review Committee','N','N');
	for (x in wfTasksArray)        if (wfTasksArray[x].getProcessCode() == 'PLN_DESIGNREVIEW_COMMDR')            setTask(x,'N','N','PLN_DESIGNREVIEW_COMMDR');
	}

if (AInfo['Trails Committee'] != 'CHECKED') {
	setTask('Trails Committee','N','N');
	for (x in wfTasksArray)        if (wfTasksArray[x].getProcessCode() == 'PLN_DESIGNREVIEW_COMMTRL')            setTask(x,'N','N','PLN_DESIGNREVIEW_COMMTRL');
	}

if (AInfo['Grading Review Committee'] != 'CHECKED') {
	setTask('Trails Committee','N','N');
	}

