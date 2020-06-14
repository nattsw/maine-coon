import axios from 'axios';

const initialState = {
  gitlabApiUrl: 'https://gitlab.com/api/v4/',
  pipelinesData: [
    {
      status: 'success',
      startedAt: '2020-06-12T02:32:07.078Z',
      user: {
        name: 'Jorsche Tan',
      },
      duration: 849,
      message: 'Destroy squadron row based on id using typeOrm\n\n[#172882550]\n\nSigned-off-by: Benford Tan <benford.tan@outlook.com>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-11T09:46:58.756Z',
      user: {
        name: 'Jorsche Tan',
      },
      duration: 837,
      message: 'Use upsert oracle squadron instead of create oracle squadron\n\n[#172882550]\n\nSigned-off-by: Jorsche Tan <jorschetan@gmail.com>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-11T08:33:21.485Z',
      user: {
        name: 'Benford',
      },
      duration: 828,
      message: "Modify entities to generate uuid and fix issue of oracle not supporting boolean\n\n-Use Boolean to insert '1' for true and '0' for false, which TypeORM retrieves as actual booleans\n\n[#172882550]\n",
    },
    {
      status: 'success',
      startedAt: '2020-06-11T08:06:47.236Z',
      user: {
        name: 'Shannon',
      },
      duration: null,
      message: 'Fix memory leak in oracledb tests\n\n[#172882550]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-11T06:00:23.359Z',
      user: {
        name: 'Jorsche Tan',
      },
      duration: 808,
      message: 'Create entities for all our models\n\n[#172882550]\n\nSigned-off-by: Benford Tan <benford.tan@outlook.com>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-11T05:46:06.177Z',
      user: {
        name: 'Benford',
      },
      duration: 844,
      message: 'Add AircrewTlAssignment, BatrTlRequirement, Qualification entities, read all entities instead of importing individually\n\n[#172882550]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-10T08:55:45.925Z',
      user: {
        name: 'Jorsche Tan',
      },
      duration: 1019,
      message: 'Remove async in test\n[#172882550]\n\nSigned-off-by: Jorsche Tan <jorschetan@gmail.com>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-10T08:31:53.927Z',
      user: {
        name: 'Jorsche Tan',
      },
      duration: 887,
      message: 'Remove model in flight event log entity\n\n[#172882550]\n\nSigned-off-by: Jorsche Tan <jorschetan@gmail.com>\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-10T08:27:09.292Z',
      user: {
        name: 'Jorsche Tan',
      },
      duration: 157,
      message: 'Remove oracle implementation for creating flight events\n\n-Will introduce one that uses typeORM instead\n\n[#172882550]\n\nSigned-off-by: Benford Tan <benford.tan@outlook.com>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-10T07:17:45.881Z',
      user: {
        name: 'Ray',
      },
      duration: 886,
      message: "Reset Manage Schedule page when new date is selected\n\nWe observed that selecting a new date in the Date picker didn't change\nthe start/end date in Assign Airspace modal, and realised that it might\nmake sense to reset Manage Schedule (eg. waves, schedule, SXO) when a\nnew date is selected.\n\n[#171691462]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n",
    },
    {
      status: 'success',
      startedAt: '2020-06-10T06:54:57.876Z',
      user: {
        name: 'Shannon',
      },
      duration: 876,
      message: 'Fix failing oracledb tests\n\n[#172882550]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-10T02:00:05.548Z',
      user: {
        name: 'Ray',
      },
      duration: 880,
      message: 'Reduce excessive padding in Area, Start/End Date input fields on Assign Airspace\n\n[#171691228]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-09T09:55:24.668Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 799,
      message: 'Show trash button in Assign Airspace Modal\n\nand style the modal\n\n[#171691228]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-09T08:06:08.336Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 858,
      message: 'Show assign airspace modal when button is clicked\n\n[#171664525]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-09T07:01:09.796Z',
      user: {
        name: 'Jorsche Tan',
      },
      duration: 896,
      message: 'Refactor to use getRepo instead of getManger\n\n[#172882550]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-09T06:08:08.079Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 859,
      message: 'Show duration populated based on takeoff and landing times\n\n[#171664156]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-09T04:42:59.646Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 834,
      message: 'Update delete formation confirmation dialog\n\n[#171717372]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-09T04:28:09.403Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 865,
      message: 'Limit input to take in 24-hr format for briefing, takeoff, and landing in Manage Schedule formation\n\n[#171664124]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-09T03:13:16.528Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 845,
      message: 'Fix mock path\n\n[#173237957]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-09T03:08:24.238Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 168,
      message: 'Assert loosely on order of approaches in E-Logbook flights summary\n\n[no-pt-story]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-08T10:13:29.263Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 845,
      message: 'Show NO GO only for grounding expired or lapsed currencies\n\nAlso, add tests for default props on withExpiredAndLapsedPopup.\n\n[#171664057]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-08T09:57:55.789Z',
      user: {
        name: 'Jorsche Tan',
      },
      duration: 911,
      message: 'Add in missing package in package-lock\n\n[#172882550]\n\nSigned-off-by: Jorsche Tan <jorschetan@gmail.com>\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-08T09:55:01.429Z',
      user: {
        name: 'Jorsche Tan',
      },
      duration: 22,
      message: 'Refactor aircrew controller test using getManager\n\n[#172882550]\n\nSigned-off-by: Benford Tan <benford.tan@outlook.com>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-08T09:37:44.176Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 875,
      message: 'Limit CALLSIGN to take in only letters...\n\nand set CALLSIGN and MISSION in the store\n\n[#171664057]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-08T08:03:10.165Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 820,
      message: 'Colour popups for both light and dark themes\n\n[#172096241]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-08T07:45:50.420Z',
      user: {
        name: 'Shannon',
      },
      duration: 824,
      message: 'Ensure sequelize maintains a connection to the db before running test\n\n[#172882550]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-08T07:00:55.858Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 845,
      message: "Show Delete Formation modal when trash icon is clicked\n\n- Delete the formation when yes is clicked\n- Don't delete formation when no is clicked\n\n[#171717372, #171717442, #171717484]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n",
    },
    {
      status: 'success',
      startedAt: '2020-06-08T06:08:15.581Z',
      user: {
        name: 'Shannon',
      },
      duration: 823,
      message: 'Revert "App Error Handling"\n\nThis reverts commit 915b8a00273c7cee56e81edabc4b4d7406d7c50c,\nb7f77fb2fed22eed4c64580c36901dd29b568b4c.\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-08T05:53:49.989Z',
      user: {
        name: 'Shannon',
      },
      duration: 174,
      message: 'Ensure cleanup process is triggered on app close\n\n[#172882550]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-08T05:08:57.743Z',
      user: {
        name: 'Shannon',
      },
      duration: 826,
      message: 'Revert "Ensure app crashes when initialization fails"\n\nThis reverts commit e32025d5657fe39c51bb930768724ff40f945b7b',
    },
    {
      status: 'failed',
      startedAt: '2020-06-08T05:04:32.681Z',
      user: {
        name: 'Shannon',
      },
      duration: 165,
      message: 'Ensure app crashes when initialization fails\n\n[#172882550]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-08T04:14:11.709Z',
      user: {
        name: 'Ray',
      },
      duration: 850,
      message: 'Remove unused import in ManageScheduleWaveLin\n\n[#171663801]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-08T04:10:00.500Z',
      user: {
        name: 'Ray',
      },
      duration: 110,
      message: 'Delete line when Manage Schedule Line trash icon is clicked\n\n[#171663801]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-08T03:49:42.725Z',
      user: {
        name: 'Ray',
      },
      duration: 810,
      message: 'Hide popup so that user can select from dropdown on Manage Schedule\n\n[#172096241]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'canceled',
      startedAt: '2020-06-08T03:43:37.792Z',
      user: {
        name: 'Ray',
      },
      duration: 322,
      message: 'Add spacing to popup content only when header is present on Manage Schedule\n\n[#172096241]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'canceled',
      startedAt: '2020-06-08T03:40:39.388Z',
      user: {
        name: 'Ray',
      },
      duration: 135,
      message: 'Style Manage Schedule popup\n\n[#172096241]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-08T02:38:36.009Z',
      user: {
        name: 'Ray',
      },
      duration: 889,
      message: 'Return currencies info for Manage Schedule popup\n\n[#172096241]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-05T09:07:13.056Z',
      user: {
        name: 'Ray',
      },
      duration: 883,
      message: 'Allow view IE config to run on Windows as well\n\n[no-pt-story]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-05T01:29:38.483Z',
      user: {
        name: 'Benford',
      },
      duration: 861,
      message: 'Remove ability to select all columns when making read query\n\n[#172882550]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-04T10:37:43.298Z',
      user: {
        name: 'Shannon',
      },
      duration: 819,
      message: 'Fix failing tests\n\n[#168167174]\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-04T10:29:07.853Z',
      user: {
        name: 'Shannon',
      },
      duration: 166,
      message: 'Fix scoping of Backend Unit Tests\n\n[#168167174]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-04T07:32:06.535Z',
      user: {
        name: 'Shannon',
      },
      duration: 789,
      message: 'Add test stub\n\n[#168167174]\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-04T07:22:37.594Z',
      user: {
        name: 'Shannon',
      },
      duration: 229,
      message: 'Fix failing oracle test\n\n[#168167174]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-04T03:17:56.876Z',
      user: {
        name: 'Benford',
      },
      duration: 953,
      message: "Add temporary conditions for running controller tests that hit Oracle DB to temporarily skip such tests on the pipeline\n\n-Pipeline doesn't have Oracle DB at the moment\n\n[#172882550]\n",
    },
    {
      status: 'success',
      startedAt: '2020-06-04T02:56:43.535Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 917,
      message: 'Revert to use npm ci and registry\n\nAlso added empty lines to package.jsons to trigger prepare jobs\n\n[no-pt-story]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-03T10:19:58.032Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 932,
      message: 'Revert "Revert "Temporarily let npm install instead of npm ci""\n\n8966a82c0112fcbd0a484ffce64fd05f4e14c2fa\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-03T10:16:38.816Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 93,
      message: 'Hide x icon in aircrew dropdown when list is open\n\n[#171663604]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-03T10:00:15.438Z',
      user: {
        name: 'Yen',
      },
      duration: 951,
      message: 'Revert "Add /api/health-check route to return 200"\n\nThis reverts commit 7900f0cca639e9bec2ea15906e118d05634845ed.\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-03T09:55:58.243Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 70,
      message: 'Add dumb space to trigger npm installation\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-03T09:51:22.412Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 151,
      message: 'Temporarily let npm install instead of npm ci\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-03T09:49:37.205Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 36,
      message: 'Temporarily let npm isntall instead of npm ci\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-03T08:57:49.917Z',
      user: {
        name: 'Yen',
      },
      duration: 168,
      message: 'remove middleware dependcy for node SSPI\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-03T08:38:49.931Z',
      user: {
        name: 'Yen',
      },
      duration: 62,
      message: 'Revert ProductionOsn\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-03T07:26:53.346Z',
      user: {
        name: 'Yen',
      },
      duration: 83,
      message: 'Rename productionOsn logFilePath & /authenticate during first load\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-03T05:44:33.525Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 816,
      message: 'Fix prop types warning when draggable style is required but not passed\n\n[#171642595]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-03T05:00:35.253Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 898,
      message: 'Move planned events expired indicator colour to theme\n\n[#172168149]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-03T03:16:26.574Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 865,
      message: 'Add required store props to parent component\n\n[#173144523]\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-03T03:09:59.553Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 170,
      message: 'Scope E-Logbook header dropdown to squadrons\n\nIt was a necessary evil to allow E2E tests to scope by squadrons.\n\n[#173144523]\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-03T02:37:07.585Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 808,
      message: 'Move cursor in input to match the starting of text in dropdowns in Manage Schedule\n\n[#171663604]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-03T00:51:50.710Z',
      user: {
        name: 'Ray',
      },
      duration: 948,
      message: 'Add E2E setup and assertion for go/no-go\n\n[#171663604]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-02T09:46:11.067Z',
      user: {
        name: 'Shannon',
      },
      duration: 906,
      message: 'Optimize backend test execution on CI\n\n[#168167174]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-02T09:21:36.513Z',
      user: {
        name: 'Ray',
      },
      duration: 934,
      message: 'Fix missing @babel/compat-data/corejs3-shipped-proposals on fresh install\n\n[no-pt-story]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-02T06:19:19.061Z',
      user: {
        name: 'Shannon',
      },
      duration: 932,
      message: 'Update webstorm configs to handle integration and unit test differently\n\n[#168167174]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-02T05:05:34.436Z',
      user: {
        name: 'Shannon',
      },
      duration: 873,
      message: 'Move oracledb pool closure to www.js\n\n[#168167174]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-01T08:51:10.533Z',
      user: {
        name: 'Ray',
      },
      duration: 821,
      message: 'Add manage schedule to store parents of ManageScheduleAircrewDropdown\n\n[#171663604]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-01T08:39:51.239Z',
      user: {
        name: 'Shannon',
      },
      duration: 176,
      message: 'Add ER-Diagrams\n\n[#168167174]\n',
    },
    {
      status: 'success',
      startedAt: '2020-06-01T02:05:29.286Z',
      user: {
        name: 'Ray',
      },
      duration: 813,
      message: 'Cycle period date derived from part should be at month-end in BATR Admin Active pane\n\n[no-pt-story]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'failed',
      startedAt: '2020-06-01T01:54:03.936Z',
      user: {
        name: 'Ray',
      },
      duration: 173,
      message: 'Fix cycle period calculation in test\n\nThis only reared its head on 1 June!\n\n[no-pt-story]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-29T06:28:01.206Z',
      user: {
        name: 'Shannon',
      },
      duration: 914,
      message: 'Add webstorm config to start app with oracledb\n\n[#168167174]\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-28T07:07:06.167Z',
      user: {
        name: 'Ray',
      },
      duration: 1050,
      message: 'Lock Events Planned width and Ops Cat height on Manage Schedule correctly when dragging\n\n[#171663433, #171663487]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-28T02:41:59.524Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 933,
      message: 'Show border for non-obvious CAT D colour on Manage Schedule Page\n\n[#171663487]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-28T01:51:14.384Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 1103,
      message: 'Fix classnames for cat colors\n\n[#171663487]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'canceled',
      startedAt: '2020-05-28T01:45:53.376Z',
      user: {
        name: 'Natalie Tay',
      },
      duration: 318,
      message: 'Clear manage schedule page state when selected squadron changes\n\n[#171663487]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-28T01:28:18.176Z',
      user: {
        name: 'Benford',
      },
      duration: 985,
      message: 'Update readme for setting up of Oracle 12c directly on Docker using official Oracle Docker Image\n\n[#172907781]\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-27T08:47:58.675Z',
      user: {
        name: 'zhang xin',
      },
      duration: 1047,
      message: 'Add oracle repository for SQUADRON create,update,destory,get\n\n[#168167174]\n\nSigned-off-by: Jorsche Tan <jorschetan@gmail.com>\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-27T08:27:20.335Z',
      user: {
        name: 'Shannon',
      },
      duration: 1171,
      message: 'Ensure ci backend tests do not test on migration scripts\n\n[#168167174]\n',
    },
    {
      status: 'failed',
      startedAt: '2020-05-27T08:15:24.080Z',
      user: {
        name: 'Shannon',
      },
      duration: 228,
      message: 'Add readme for Migration scripts\n\n[#168167174]\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-27T06:06:04.882Z',
      user: {
        name: 'Ray',
      },
      duration: 1030,
      message: 'Sort and style Manage schedule flight events search dropdown\n\n[#171663433]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-27T04:19:24.330Z',
      user: {
        name: 'Ray',
      },
      duration: 876,
      message: 'Add back RAM page object\n\nIt was accidentally removed in c774a40d (Tue 15:40, Refactor e2e tests\nfor the new flight page).\n\n[no-pt-story]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'failed',
      startedAt: '2020-05-27T03:51:18.046Z',
      user: {
        name: 'Ray',
      },
      duration: 739,
      message: 'Events planned pulls in flight events on Manage Schedule\n\n[#171663433]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-26T08:51:14.235Z',
      user: {
        name: 'Shannon',
      },
      duration: 1166,
      message: 'Add test helper and files for migration testing\n\n[#168167174]\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-26T08:25:31.576Z',
      user: {
        name: 'Jorsche Tan',
      },
      duration: 970,
      message: 'Refactor e2e tests for the new flight page\n\n[173007246]\n\nSigned-off-by: Jorsche Tan <jorschetan@gmail.com>\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-26T08:01:32.733Z',
      user: {
        name: 'Ray',
      },
      duration: 1017,
      message: 'Move components used by Deprecated Manage Schedule into deprecated folder too\n\n[#171663433]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'canceled',
      startedAt: '2020-05-26T07:28:29.071Z',
      user: {
        name: 'Ray',
      },
      duration: 482,
      message: 'Add flight events to store setup in app test\n\n[#171663433]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'failed',
      startedAt: '2020-05-26T07:21:42.937Z',
      user: {
        name: 'Ray',
      },
      duration: 251,
      message: "Nest non-grounding flight events by aircraft type\n\nThe previous FlightEventSearch component and the backend endpoint dealt\nsolely with kraken flight events; we're now introducing squid as well.\n\n[#171663433]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n",
    },
    {
      status: 'success',
      startedAt: '2020-05-26T04:00:31.328Z',
      user: {
        name: 'zhang xin',
      },
      duration: 1000,
      message: 'Fix eslint issue\n\n[no-pt-story]\n\nSigned-off-by: Zhangxin <zhangxinpivotal@gmail.com>\n',
    },
    {
      status: 'failed',
      startedAt: '2020-05-26T03:46:28.852Z',
      user: {
        name: 'zhang xin',
      },
      duration: 195,
      message: 'Add Oracle Controller test for add,put,get AIRCREW\n\n[#168167174]\n\nSigned-off-by: Jorsche Tan <jorschetan@gmail.com>\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-26T02:19:29.853Z',
      user: {
        name: 'Shannon',
      },
      duration: 919,
      message: 'Add ORACLEDB_12c readme, and updated dbconfig\n\n[#168167174]\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-22T08:07:55.309Z',
      user: {
        name: 'Benford',
      },
      duration: 820,
      message: 'Fix careless mistake for prop name\n\n[no-pt-story]\n',
    },
    {
      status: 'failed',
      startedAt: '2020-05-22T07:47:45.113Z',
      user: {
        name: 'Ray',
      },
      duration: 243,
      message: 'Reload lines when squadron changes\n\n[#172139975]\n',
    },
    {
      status: 'failed',
      startedAt: '2020-05-22T07:41:52.100Z',
      user: {
        name: 'Benford',
      },
      duration: 36,
      message: 'Reload lines when squadron changes\n\n[#172139975]\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-22T05:36:39.229Z',
      user: {
        name: 'Ray',
      },
      duration: 799,
      message: 'Make font weight on formation sections bold\n\n[#171642595]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-22T02:59:15.598Z',
      user: {
        name: 'Ray',
      },
      duration: 839,
      message: 'Make font weight on formation sections bold\n\n[#171642595]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-22T01:35:36.982Z',
      user: {
        name: 'Ray',
      },
      duration: 753,
      message: 'Do not show page content over Feedback on Manage Schedule\n\n[#171642595]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-21T13:22:30.615Z',
      user: {
        name: 'Ray',
      },
      duration: 852,
      message: 'Be forgiving against non-detertministic IF approach ordering\n\n[no-pt-story]\n',
    },
    {
      status: 'failed',
      startedAt: '2020-05-21T10:23:11.766Z',
      user: {
        name: 'Shannon',
      },
      duration: 611,
      message: 'Detect local timezone for logging\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-21T09:34:42.516Z',
      user: {
        name: 'Ray',
      },
      duration: 835,
      message: 'Wire up FCP and RCP to store on Manage Schedule\n\n[#171663400]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-21T09:09:09.346Z',
      user: {
        name: 'Ray',
      },
      duration: 859,
      message: 'Fix cursor on drag handle on Manage Schedule for IE 11\n\nreact beautiful dnd sets cursor: grab, which is unfortunately not\nsupported on IE 11: https://caniuse.com/#feat=css3-cursors-grab\n\n[#171642595]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-21T08:49:43.548Z',
      user: {
        name: 'Ray',
      },
      duration: 746,
      message: 'Lock cell widths, esp. config one, on a line when dragged\n\n[#171642595]\n\nSigned-off-by: Natalie Tay <ntay@pivotal.io>\n',
    },
    {
      status: 'success',
      startedAt: '2020-05-21T07:01:26.184Z',
      user: {
        name: 'Ray',
      },
      duration: 807,
      message: 'Lock column widths on IE 11 when line is dragged\n\n[#171642595]\n\nSigned-off-by: Ray Chuan Tay <rtay@pivotal.io>\n',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'settings/private-token/update':
      return { ...state, token: action.state };
    case 'settings/projects/update':
      return { ...state, projects: action.state };
    case 'settings/project-id/update':
      return { ...state, projectId: action.state };
    case 'settings/pipelines-data/update':
      return { ...state, pipelinesData: action.state };
    case 'settings/gitlab-api-url/update':
      return { ...state, gitlabApiUrl: action.state };
    default:
      return state;
  }
};

export default reducer;

export const setSettingsAPIPrivateToken = (token) => (dispatch) => {
  dispatch({
    type: 'settings/private-token/update',
    state: token,
  });
};

export const getSettingsProjects = () => async (dispatch, getState) => {
  const { token, gitlabApiUrl: baseURL } = getState().settings;
  const projects = (await axios.get(`/projects?visibility=private&private_token=${token}`, { baseURL })).data;
  dispatch({
    type: 'settings/projects/update',
    state: projects,
  });
};

export const setSettingsProjectId = (project) => (dispatch) => {
  dispatch({
    type: 'settings/project-id/update',
    state: project,
  });
};

export const getSettingsPipelinesData = () => async (dispatch, getState) => {
  const { token, gitlabApiUrl: baseURL, projectId } = getState().settings;

  const details = await Promise
    .all((await axios
      .get(`/projects/${projectId}/pipelines?scope=finished&private_token=${token}&per_page=100`, { baseURL }))
      .data
      .map(async ({ id }) => (await axios.get(`/projects/${projectId}/pipelines/${id}?private_token=${token}`, { baseURL })).data));
  const detailsWithMessage = await Promise
    .all(details
      .map(async ({ sha, ...data }) => {
        const commit = (await axios
          .get(`/projects/${projectId}/repository/commits/${sha}?private_token=${token}`, { baseURL })).data;
        return ({ ...data, message: commit.message });
      }));
  const filtered = detailsWithMessage.map(({
    id, started_at: startedAt, duration, status, message, user,
  }) => (
    {
      id, startedAt, duration, status, message, user,
    }
  ));

  dispatch({
    type: 'settings/pipelines-data/update',
    state: filtered,
  });
};

export const setSettingsGitlabAPIUrl = (url) => (dispatch) => {
  dispatch({
    type: 'settings/gitlab-api-url/update',
    state: url,
  });
};
