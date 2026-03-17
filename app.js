const STORAGE_KEY = 'pwc-watercare-ai-state-v1';

const seedData = {
  currentUser: {
    name: 'Người dùng demo',
    role: 'Kỹ thuật viên',
  },
  devices: [
    {
      id: 'device-bermad-720',
      category: 'Van giảm áp',
      brand: 'Bermad',
      name: 'Bermad 720',
      intro:
        'Van giảm áp điều khiển thủy lực dùng để ổn định áp lực đầu ra trong mạng lưới DMA, phù hợp cho khu vực có biến động tải lớn.',
      usage:
        'Sử dụng để duy trì áp lực ổn định tại khu vực tiêu thụ, giảm sốc áp, bảo vệ ống và thiết bị hạ lưu. Khuyến nghị kiểm tra theo chu kỳ khi DMA có dao động lưu lượng cao.',
      installation:
        'Lắp đúng chiều dòng chảy, bố trí van cô lập hai đầu, lắp lọc Y trước thân van, tạo vị trí đủ không gian cho bảo trì pilot và đồng hồ áp. Sau lắp đặt cần xả khí và chạy thử theo 3 bước tăng áp.',
      commonIssues: [
        {
          issue: 'Áp đầu ra dao động',
          cause: 'Pilot bẩn, lưới lọc tắc, đường tín hiệu áp bị đọng cặn.',
          solution: 'Vệ sinh pilot, xả cặn đường ống tín hiệu, kiểm tra lại setpoint và gioăng pilot.',
        },
        {
          issue: 'Van không giữ được áp sau bảo dưỡng',
          cause: 'Lắp sai vị trí lò xo pilot hoặc màng van chưa kín.',
          solution: 'Kiểm tra lại cụm pilot, siết theo đúng thứ tự chéo, thử kín trước khi đưa vào vận hành.',
        },
      ],
      advancedIssues: [
        {
          issue: 'Sụt áp cuối DMA giờ cao điểm',
          cause: 'Setpoint không phù hợp với biểu đồ phụ tải hoặc kích thước van chưa tối ưu.',
          solution: 'Đối chiếu logger áp lực 7 ngày, cân chỉnh setpoint theo khung giờ hoặc đánh giá thay đổi cấu hình DMA.',
        },
      ],
      repairProcess: [
        'Khóa van cô lập đầu vào và đầu ra.',
        'Xả áp buồng van và xác nhận áp về 0.',
        'Tháo pilot, vệ sinh lưới lọc và đường tín hiệu.',
        'Kiểm tra màng van, seat, gioăng và thay thế nếu mòn.',
        'Lắp lại, chạy tăng áp theo từng bước và đối chiếu áp kế đầu ra.',
      ],
      media: [
        'Ảnh sơ đồ lắp đặt pilot và đường sensing.',
        'Video thao tác cân chỉnh setpoint ngoài hiện trường.',
        'Form checklist kiểm tra sau bảo dưỡng.',
      ],
    },
    {
      id: 'device-sensus-iperl',
      category: 'Đồng hồ đo nước',
      brand: 'Sensus',
      name: 'Sensus iPERL',
      intro:
        'Đồng hồ đo nước điện tử có khả năng ghi nhận lưu lượng ổn định, hỗ trợ đọc số chính xác và phù hợp cho tích hợp số hóa.',
      usage:
        'Dùng cho điểm đo tổng, DMA hoặc khách hàng có yêu cầu độ chính xác cao. Khuyến nghị kết hợp niêm chì và kiểm tra mặt số định kỳ.',
      installation:
        'Làm sạch đoạn ống trước khi lắp, đặt đồng hồ theo đúng tư thế khuyến nghị của hãng, kiểm tra chiều mũi tên và niêm chì sau nghiệm thu.',
      commonIssues: [
        {
          issue: 'Mặt số khó quan sát',
          cause: 'Buồng đồng hồ ẩm, kính bẩn hoặc góc chụp không chuẩn.',
          solution: 'Vệ sinh kính, tăng cường ánh sáng, chuẩn hóa quy trình chụp ảnh theo khung AI.',
        },
        {
          issue: 'Sai sót nhập chỉ số thủ công',
          cause: 'Nhập tay và đối chiếu nhiều lần.',
          solution: 'Áp dụng OCR nhận dạng số từ ảnh và xác nhận lại bởi người thực hiện.',
        },
      ],
      advancedIssues: [
        {
          issue: 'Số liệu tăng đột biến so với kỳ trước',
          cause: 'Có thể do rò rỉ, ghi nhận nhầm chỉ số hoặc biến động tiêu thụ bất thường.',
          solution: 'Đối chiếu ảnh gốc, so sánh biểu đồ tiêu thụ, kiểm tra hiện trường và lịch sử can thiệp DMA.',
        },
      ],
      repairProcess: [
        'Xác nhận mã đồng hồ và niêm chì.',
        'Kiểm tra buồng đồng hồ và tình trạng kín nước.',
        'Làm sạch mặt số, chụp ảnh chuẩn, đối chiếu OCR và xác nhận.',
        'Lưu báo cáo và đồng bộ lên hệ thống.',
      ],
      media: [
        'Ảnh mẫu chụp đúng góc nhìn như CCCD.',
        'Video thao tác chốt số tại DMA.',
        'Biểu mẫu báo cáo chuẩn cho đội ghi nhận.',
      ],
    },
    {
      id: 'device-hwm-logger',
      category: 'Data logger',
      brand: 'HWM',
      name: 'HWM Permalog+',
      intro:
        'Thiết bị data logger thu thập áp lực và lưu lượng phục vụ theo dõi thất thoát, dao động áp và hành vi mạng lưới theo thời gian.',
      usage:
        'Triển khai tại DMA, điểm đo áp trọng yếu hoặc vị trí nghi ngờ bất thường. Dữ liệu dùng cho phân tích xu hướng, cảnh báo và tối ưu vận hành.',
      installation:
        'Kiểm tra nguồn pin, trạng thái anten, cấu hình chu kỳ gửi dữ liệu, đặt logger đúng điểm đo và xác minh tín hiệu ngay sau kích hoạt.',
      commonIssues: [
        {
          issue: 'Mất kết nối dữ liệu',
          cause: 'Pin yếu, sóng yếu, cấu hình APN/chu kỳ truyền chưa phù hợp.',
          solution: 'Kiểm tra pin, thử vị trí anten khác, rà soát cấu hình truyền và lịch kết nối.',
        },
        {
          issue: 'Dữ liệu thiếu điểm trong giờ đêm',
          cause: 'Chu kỳ log dài hoặc reset thiết bị.',
          solution: 'Rút ngắn chu kỳ log ở giai đoạn phân tích, kiểm tra nhật ký reset và firmware.',
        },
      ],
      advancedIssues: [
        {
          issue: 'Đồ thị áp không ổn định dù hiện trường bình thường',
          cause: 'Có thể do cảm biến rung, cáp tín hiệu lỏng hoặc nhiễu điện từ cục bộ.',
          solution: 'Kiểm tra cáp, đầu nối, tiếp địa và đối chiếu bằng thiết bị đo độc lập trong 24 giờ.',
        },
      ],
      repairProcess: [
        'Đọc log lỗi từ logger.',
        'Kiểm tra nguồn pin và module truyền thông.',
        'Kiểm tra cảm biến, đầu nối, hộp bảo vệ.',
        'Cấu hình lại chu kỳ log và chạy thử.',
      ],
      media: [
        'Ảnh cấu hình logger chuẩn.',
        'Video kiểm tra tín hiệu tại DMA xa.',
        'Checklist nghiệm thu logger sau thay pin.',
      ],
    },
    {
      id: 'device-avk-airvalve',
      category: 'Thiết bị phụ trợ',
      brand: 'AVK',
      name: 'AVK Air Valve',
      intro:
        'Van xả khí hỗ trợ ổn định đường ống và giảm nguy cơ búa nước khi vận hành mạng lưới có địa hình phức tạp.',
      usage:
        'Lắp tại các điểm cao, điểm có khả năng tích tụ khí hoặc đoạn tuyến thay đổi cao độ lớn. Cần kiểm tra xả khí định kỳ để tránh nghẹt.',
      installation:
        'Lắp theo đúng tư thế thẳng đứng, có van cô lập và điểm xả an toàn. Kiểm tra độ kín và hướng thoát khí trước khi đưa vào vận hành.',
      commonIssues: [
        {
          issue: 'Van xả khí rỉ nước nhẹ',
          cause: 'Cặn bẩn làm kẹt phao hoặc gioăng mòn.',
          solution: 'Tháo vệ sinh buồng phao, thay gioăng nếu cần và chạy thử lại.',
        },
      ],
      advancedIssues: [
        {
          issue: 'Búa nước tái diễn sau khi đã lắp van xả khí',
          cause: 'Điểm đặt van chưa tối ưu hoặc cần kết hợp thêm giải pháp giảm chấn.',
          solution: 'Đo lại áp xung, rà soát profile tuyến ống và đánh giá bổ sung thiết bị bảo vệ.',
        },
      ],
      repairProcess: [
        'Khóa van cô lập.',
        'Tháo cụm phao và làm sạch cặn.',
        'Kiểm tra thân, nắp, gioăng.',
        'Lắp lại và kiểm tra kín nước.',
      ],
      media: [
        'Ảnh kiểm tra điểm cao cuối tuyến.',
        'Sơ đồ nguyên lý tích tụ khí và xả khí.',
      ],
    },
  ],
  questions: [
    {
      id: 'q-001',
      title: 'Van giảm áp Bermad tụt áp sau khi vệ sinh pilot',
      body:
        'Sau khi vệ sinh pilot, áp đầu ra chỉ giữ được khoảng 1.8 bar thay vì 2.5 bar như cài đặt. DMA Trung Tâm có dao động mạnh vào giờ cao điểm.',
      author: 'Nguyễn Văn A',
      deviceId: 'device-bermad-720',
      createdAt: '2026-03-15T09:10:00',
      status: 'resolved',
      answers: [
        {
          id: 'a-001',
          author: 'Trần Văn B',
          body:
            'Kiểm tra lại lò xo pilot và hướng lắp màng. Trường hợp này thường do cụm pilot siết chưa đều hoặc còn cặn trong đường sensing. Nên xả đường tín hiệu rồi cân chỉnh lại setpoint theo từng bước.',
          stars: 5,
          accepted: true,
          createdAt: '2026-03-15T09:40:00',
        },
        {
          id: 'a-002',
          author: 'Lê Văn C',
          body:
            'Nên so lại logger áp 24h để chắc chắn giờ cao điểm không kéo tụt áp vì lưu lượng vượt khả năng van. Nếu setpoint đúng mà vẫn tụt thì xem lại seat và màng.',
          stars: 4,
          accepted: false,
          createdAt: '2026-03-15T10:05:00',
        },
      ],
    },
    {
      id: 'q-002',
      title: 'Data logger mất kết nối từ 2h sáng đến 5h sáng',
      body:
        'Logger tại DMA Phú Hòa có dữ liệu ban ngày bình thường nhưng mất gói vào khung 2h–5h sáng liên tục 3 đêm gần nhất.',
      author: 'Phạm Văn D',
      deviceId: 'device-hwm-logger',
      createdAt: '2026-03-14T16:20:00',
      status: 'open',
      answers: [
        {
          id: 'a-003',
          author: 'Ngô Văn E',
          body:
            'Khả năng pin đang yếu nên thiết bị rớt kết nối ở ngưỡng nhiệt độ thấp ban đêm. Nên kiểm tra điện áp pin và nhật ký reset.',
          stars: 4,
          accepted: false,
          createdAt: '2026-03-14T17:00:00',
        },
      ],
    },
    {
      id: 'q-003',
      title: 'Cần chuẩn hóa cách chụp ảnh mặt số đồng hồ cho tổ ghi nhận',
      body:
        'Hiện ảnh chụp rất khác nhau, nhiều ảnh bị lệch góc và khó OCR. Đề nghị xây checklist bắt buộc khi chốt số.',
      author: 'Tổ ghi nhận DMA',
      deviceId: 'device-sensus-iperl',
      createdAt: '2026-03-13T11:30:00',
      status: 'open',
      answers: [
        {
          id: 'a-004',
          author: 'Mai Văn F',
          body:
            'Nên làm khung chụp cố định trên app, bắt người dùng chụp đúng thứ tự như xác thực CCCD. Sau đó AI OCR đọc số và chỉ yêu cầu người dùng xác nhận.',
          stars: 5,
          accepted: false,
          createdAt: '2026-03-13T12:10:00',
        },
      ],
    },
  ],
  tasks: [
    {
      id: 'task-001',
      title: 'Khảo sát áp lực DMA Trung Tâm sau giờ cao điểm',
      assignee: 'Nguyễn Văn A',
      supervisor: 'Trần Văn B',
      location: 'DMA Trung Tâm',
      dueDate: '2026-03-17',
      status: 'doing',
      createdAt: '2026-03-15T08:00:00',
      steps: [
        {
          id: 'step-001',
          title: 'Kiểm tra áp đầu vào / đầu ra tại PRV',
          completed: true,
          completedBy: 'Nguyễn Văn A',
          completedAt: '2026-03-15T08:40:00',
        },
        {
          id: 'step-002',
          title: 'Đối chiếu logger áp 24h',
          completed: false,
          completedBy: '',
          completedAt: '',
        },
        {
          id: 'step-003',
          title: 'Chụp ảnh hiện trường và gửi báo cáo',
          completed: false,
          completedBy: '',
          completedAt: '',
        },
      ],
    },
    {
      id: 'task-002',
      title: 'Thay pin data logger DMA Phú Hòa',
      assignee: 'Phạm Văn D',
      supervisor: 'Ngô Văn E',
      location: 'DMA Phú Hòa',
      dueDate: '2026-03-16',
      status: 'todo',
      createdAt: '2026-03-15T14:00:00',
      steps: [
        {
          id: 'step-004',
          title: 'Kiểm tra điện áp pin hiện tại',
          completed: false,
          completedBy: '',
          completedAt: '',
        },
        {
          id: 'step-005',
          title: 'Thay pin và khởi động lại logger',
          completed: false,
          completedBy: '',
          completedAt: '',
        },
      ],
    },
    {
      id: 'task-003',
      title: 'Chuẩn hóa biểu mẫu báo cáo chốt số tháng 03',
      assignee: 'Tổ ghi nhận DMA',
      supervisor: 'Giám sát kỹ thuật',
      location: 'PHT',
      dueDate: '2026-03-15',
      status: 'done',
      createdAt: '2026-03-12T08:00:00',
      steps: [
        {
          id: 'step-006',
          title: 'Thiết kế form mới theo DMA',
          completed: true,
          completedBy: 'Tổ ghi nhận DMA',
          completedAt: '2026-03-12T10:00:00',
        },
        {
          id: 'step-007',
          title: 'Kiểm thử nội bộ và chốt bản dùng thử',
          completed: true,
          completedBy: 'Giám sát kỹ thuật',
          completedAt: '2026-03-13T17:20:00',
        },
      ],
    },
  ],
  meterReports: [
    {
      id: 'mr-001',
      dma: 'DMA Phú Hòa',
      location: 'Hố van số 03',
      previous: 180120,
      current: 182334,
      variance: '1.23%',
      photoName: 'dma_phuhoa_182334.jpg',
      notes: 'Ảnh rõ, mặt số sạch, không phát hiện bất thường.',
      confirmed: true,
      createdAt: '2026-03-15T07:20:00',
      checklist: {
        captureOrder: true,
        focusConfirmed: true,
        locationConfirmed: true,
        safetyConfirmed: true,
      },
    },
    {
      id: 'mr-002',
      dma: 'DMA Trung Tâm',
      location: 'Buồng đồng hồ tổng',
      previous: 420900,
      current: 421880,
      variance: '0.23%',
      photoName: 'dma_trungtam_421880.jpg',
      notes: 'Có đọng hơi nước nhẹ, đã vệ sinh trước khi chụp lại.',
      confirmed: true,
      createdAt: '2026-03-14T07:10:00',
      checklist: {
        captureOrder: true,
        focusConfirmed: true,
        locationConfirmed: true,
        safetyConfirmed: true,
      },
    },
  ],
  workflowUpgrades: [
    {
      id: 'wf-001',
      issue: 'Chưa có SOP chuẩn cho ảnh chụp mặt số đồng hồ',
      proposedSop: 'Thiết kế khung chụp theo thứ tự bắt buộc, OCR đọc số, người dùng xác nhận và lưu ảnh chuẩn nội bộ.',
      owner: 'Ban chuyển đổi số + PHT',
      status: 'researching',
    },
    {
      id: 'wf-002',
      issue: 'Sự cố PRV lặp lại nhưng chưa có checklist sau bảo dưỡng',
      proposedSop: 'Chuẩn hóa checklist 5 bước: xả áp, vệ sinh pilot, test sensing, setpoint, logger đối chứng.',
      owner: 'Tổ van giảm áp',
      status: 'standardizing',
    },
    {
      id: 'wf-003',
      issue: 'Cần tích hợp giao việc và xác nhận hoàn thành theo thời gian thực',
      proposedSop: 'Bổ sung module giao việc, giám sát và đóng lệnh kèm dấu thời gian trong app.',
      owner: 'PHT',
      status: 'pilot',
    },
  ],
  ideas: [
    {
      id: 'idea-001',
      title: 'Đầu tư server local riêng cho phòng kỹ thuật',
      author: 'Ban kỹ thuật',
      impact: 'high',
      status: 'approved',
      createdAt: '2026-03-10T09:00:00',
      description:
        'Dùng làm hạ tầng AI nội bộ, lưu trữ dữ liệu kỹ thuật, báo cáo hiện trường và các ứng dụng phục vụ chuẩn hóa quản lý.',
    },
    {
      id: 'idea-002',
      title: 'Chuẩn hóa khung báo cáo chốt số theo DMA',
      author: 'Tổ ghi nhận DMA',
      impact: 'high',
      status: 'reviewing',
      createdAt: '2026-03-11T13:20:00',
      description:
        'Người dùng chỉ cần nhập DMA, hệ thống tự dẫn vào mẫu báo cáo mới, bắt buộc thao tác theo thứ tự chuẩn.',
    },
    {
      id: 'idea-003',
      title: 'Tích hợp OCR đọc chỉ số từ ảnh đồng hồ',
      author: 'Lê Văn C',
      impact: 'medium',
      status: 'pilot',
      createdAt: '2026-03-12T16:45:00',
      description:
        'AI tự chuyển ảnh thành số để giảm nhập tay, người thực hiện chỉ xác nhận lại trước khi lưu.',
    },
  ],
  assistantConversation: [
    {
      role: 'assistant',
      text:
        'Xin chào. Tôi là trợ lý kỹ thuật demo của PWC WaterCare AI.\n\nTôi có thể giúp bạn tra cứu thiết bị, gợi ý xử lý sự cố, tìm câu hỏi tương tự, SOP nội bộ và sáng kiến liên quan.',
    },
  ],
};

const uiState = {
  selectedDeviceId: null,
  selectedDeviceTab: 'intro',
  selectedQuestionId: null,
};

let state = loadState();
if (!state) {
  state = clone(seedData);
  saveState();
}

const els = {};

document.addEventListener('DOMContentLoaded', () => {
  cacheElements();
  bindEvents();
  ensureInitialSelections();
  renderApp();
});

function cacheElements() {
  Object.assign(els, {
    roleSelector: document.getElementById('roleSelector'),
    seedButton: document.getElementById('seedButton'),
    sidebarToggle: document.getElementById('sidebarToggle'),
    sidebarClose: document.getElementById('sidebarClose'),
    sidebarBackdrop: document.getElementById('sidebarBackdrop'),
    sidebar: document.querySelector('.sidebar'),
    kpiGrid: document.getElementById('kpiGrid'),
    leaderboardList: document.getElementById('leaderboardList'),
    notificationList: document.getElementById('notificationList'),
    librarySearch: document.getElementById('librarySearch'),
    libraryCategory: document.getElementById('libraryCategory'),
    libraryBrand: document.getElementById('libraryBrand'),
    libraryGrid: document.getElementById('libraryGrid'),
    deviceDetailPanel: document.getElementById('deviceDetailPanel'),
    deviceDetailName: document.getElementById('deviceDetailName'),
    deviceDetailMeta: document.getElementById('deviceDetailMeta'),
    deviceDetailTabs: document.getElementById('deviceDetailTabs'),
    deviceDetailContent: document.getElementById('deviceDetailContent'),
    closeDeviceDetail: document.getElementById('closeDeviceDetail'),
    questionForm: document.getElementById('questionForm'),
    questionList: document.getElementById('questionList'),
    questionModal: document.getElementById('questionModal'),
    questionModalTitle: document.getElementById('questionModalTitle'),
    questionModalMeta: document.getElementById('questionModalMeta'),
    questionModalBody: document.getElementById('questionModalBody'),
    closeQuestionModal: document.getElementById('closeQuestionModal'),
    questionAnswerList: document.getElementById('questionAnswerList'),
    answerForm: document.getElementById('answerForm'),
    questionDeviceSelect: document.getElementById('questionDeviceSelect'),
    taskForm: document.getElementById('taskForm'),
    taskBoard: document.getElementById('taskBoard'),
    meterForm: document.getElementById('meterForm'),
    meterTableBody: document.getElementById('meterTableBody'),
    meterPhoto: document.getElementById('meterPhoto'),
    ocrSource: document.getElementById('ocrSource'),
    ocrResult: document.getElementById('ocrResult'),
    runOcrButton: document.getElementById('runOcrButton'),
    currentReading: document.getElementById('currentReading'),
    workflowUpgradeList: document.getElementById('workflowUpgradeList'),
    ideaForm: document.getElementById('ideaForm'),
    ideaList: document.getElementById('ideaList'),
    assistantConversation: document.getElementById('assistantConversation'),
    assistantForm: document.getElementById('assistantForm'),
    assistantInput: document.getElementById('assistantInput'),
    statusDevices: document.getElementById('statusDevices'),
    statusOpenQuestions: document.getElementById('statusOpenQuestions'),
    statusActiveTasks: document.getElementById('statusActiveTasks'),
  });
}

function bindEvents() {
  els.seedButton.addEventListener('click', resetSeedData);
  els.roleSelector.addEventListener('change', handleRoleChange);
  els.sidebarToggle?.addEventListener('click', () => toggleSidebar());
  els.sidebarClose?.addEventListener('click', closeSidebar);
  els.sidebarBackdrop?.addEventListener('click', closeSidebar);

  els.librarySearch.addEventListener('input', renderLibrary);
  els.libraryCategory.addEventListener('change', renderLibrary);
  els.libraryBrand.addEventListener('change', renderLibrary);
  els.closeDeviceDetail.addEventListener('click', () => {
    els.deviceDetailPanel.classList.add('hidden');
  });

  els.questionForm.addEventListener('submit', handleQuestionSubmit);
  els.closeQuestionModal.addEventListener('click', closeQuestionModal);
  els.questionModal.addEventListener('click', (event) => {
    if (event.target === els.questionModal) closeQuestionModal();
  });
  els.answerForm.addEventListener('submit', handleAnswerSubmit);

  els.taskForm.addEventListener('submit', handleTaskSubmit);
  els.taskBoard.addEventListener('click', handleTaskBoardClick);
  els.taskBoard.addEventListener('change', handleTaskStepToggle);

  els.runOcrButton.addEventListener('click', runDemoOcr);
  els.meterForm.addEventListener('submit', handleMeterSubmit);

  els.ideaForm.addEventListener('submit', handleIdeaSubmit);
  els.ideaList.addEventListener('click', handleIdeaListClick);
  els.workflowUpgradeList.addEventListener('click', handleWorkflowClick);

  els.assistantForm.addEventListener('submit', handleAssistantSubmit);
  document.querySelectorAll('.quick-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const query = chip.dataset.query || '';
      els.assistantInput.value = query;
      submitAssistantQuery(query);
    });
  });

  document.addEventListener('click', handleGlobalClicks);
  document.addEventListener('keydown', handleEscActions);
  window.addEventListener('scroll', updateActiveNavLink);
  window.addEventListener('resize', handleViewportResize);

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1180) closeSidebar();
    });
  });
}

function ensureInitialSelections() {
  uiState.selectedDeviceId = state.devices[0]?.id || null;
  uiState.selectedQuestionId = state.questions[0]?.id || null;
  els.roleSelector.value = state.currentUser.role;
}

function renderApp() {
  renderToplineStats();
  renderKpis();
  renderLeaderboard();
  renderNotifications();
  populateLibraryFilters();
  populateQuestionDeviceOptions();
  renderLibrary();
  renderQuestionList();
  renderTasks();
  renderMeterTable();
  renderWorkflowUpgrades();
  renderIdeas();
  renderAssistantConversation();
  updateActiveNavLink();
}

function renderToplineStats() {
  els.statusDevices.textContent = String(state.devices.length);
  els.statusOpenQuestions.textContent = String(
    state.questions.filter((question) => question.status === 'open').length
  );
  els.statusActiveTasks.textContent = String(
    state.tasks.filter((task) => task.status !== 'done').length
  );
}

function renderKpis() {
  const avgStars = averageQuestionStars();
  const approvedIdeas = state.ideas.filter((idea) => idea.status === 'approved').length;
  const kpis = [
    {
      title: 'Thiết bị trong thư viện',
      value: state.devices.length,
      description: 'Thiết bị đã chuẩn hóa dữ liệu kỹ thuật.',
    },
    {
      title: 'Câu hỏi đã lưu trữ',
      value: state.questions.length,
      description: 'Lịch sử xử lý sự cố và tham vấn nội bộ.',
    },
    {
      title: 'Báo cáo chốt số',
      value: state.meterReports.length,
      description: 'Biểu mẫu đã lưu và có thể đồng bộ về cơ sở dữ liệu.',
    },
    {
      title: 'Điểm hài lòng câu trả lời',
      value: avgStars,
      description: 'Điểm trung bình dựa trên đánh giá 1–5 sao.',
    },
    {
      title: 'Công việc đang thực hiện',
      value: state.tasks.filter((task) => task.status === 'doing').length,
      description: 'Các đầu việc hiện trường đang chạy.',
    },
    {
      title: 'Sáng kiến đã duyệt',
      value: approvedIdeas,
      description: 'Ý tưởng đã được chấp thuận triển khai.',
    },
    {
      title: 'Quy trình đang nâng cấp',
      value: state.workflowUpgrades.length,
      description: 'Nội dung đang nghiên cứu hoặc chuẩn hóa SOP.',
    },
    {
      title: 'Vai trò hiện tại',
      value: state.currentUser.role,
      description: 'Vai trò demo đang được áp dụng trên giao diện.',
    },
  ];

  els.kpiGrid.innerHTML = kpis
    .map(
      (item) => `
        <article class="stat-card">
          <p class="eyebrow">KPI</p>
          <strong>${escapeHtml(String(item.value))}</strong>
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `
    )
    .join('');
}

function renderLeaderboard() {
  const scores = new Map();

  state.questions.forEach((question) => {
    bumpScore(scores, question.author, 6, 'Đặt câu hỏi giá trị');
    question.answers.forEach((answer) => {
      const base = Number(answer.stars) * 10;
      bumpScore(scores, answer.author, base, `${answer.stars} sao`);
      if (answer.accepted) {
        bumpScore(scores, answer.author, 15, 'Trả lời được chọn');
      }
    });
  });

  state.ideas.forEach((idea) => {
    const bonus = idea.status === 'approved' ? 30 : idea.status === 'pilot' ? 18 : 10;
    bumpScore(scores, idea.author, bonus, 'Đóng góp sáng kiến');
  });

  const leaderboard = Array.from(scores.entries())
    .map(([name, value]) => ({ name, ...value }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  els.leaderboardList.innerHTML = leaderboard
    .map(
      (person, index) => `
        <article class="list-card">
          <div class="meta-line">
            <span class="pill ${index === 0 ? 'success' : 'neutral'}">#${index + 1}</span>
            <span class="pill">${escapeHtml(person.score)} điểm</span>
          </div>
          <h4>${escapeHtml(person.name)}</h4>
          <p>${escapeHtml(person.reasons.slice(0, 3).join(' • '))}</p>
        </article>
      `
    )
    .join('');
}

function renderNotifications() {
  const items = [];

  state.questions
    .filter((question) => question.status === 'open')
    .slice(0, 2)
    .forEach((question) => {
      items.push({
        title: 'Câu hỏi cần xử lý',
        body: `${question.title} — ${question.answers.length} phản hồi hiện có.`,
        tag: 'Mở',
        className: 'warning',
      });
    });

  state.tasks
    .filter((task) => task.status !== 'done')
    .slice(0, 2)
    .forEach((task) => {
      items.push({
        title: 'Công việc hiện trường',
        body: `${task.title} — phụ trách ${task.assignee}, hạn ${formatDate(task.dueDate)}.`,
        tag: task.status === 'doing' ? 'Đang làm' : 'Chờ xử lý',
        className: task.status === 'doing' ? 'success' : 'neutral',
      });
    });

  state.workflowUpgrades.slice(0, 2).forEach((item) => {
    items.push({
      title: 'Nâng cấp quy trình',
      body: `${item.issue} — chủ trì ${item.owner}.`,
      tag: upgradeStatusText(item.status),
      className: 'neutral',
    });
  });

  els.notificationList.innerHTML = items
    .map(
      (item) => `
        <article class="list-card notification-card">
          <div>
            <h4>${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.body)}</p>
          </div>
          <span class="pill ${escapeHtml(item.className)}">${escapeHtml(item.tag)}</span>
        </article>
      `
    )
    .join('');
}

function populateLibraryFilters() {
  const categories = ['Tất cả', ...new Set(state.devices.map((device) => device.category))];
  const brands = ['Tất cả', ...new Set(state.devices.map((device) => device.brand))];

  setOptions(els.libraryCategory, categories);
  setOptions(els.libraryBrand, brands);
}

function populateQuestionDeviceOptions() {
  els.questionDeviceSelect.innerHTML = state.devices
    .map(
      (device) =>
        `<option value="${escapeHtml(device.id)}">${escapeHtml(device.name)} • ${escapeHtml(
          device.brand
        )}</option>`
    )
    .join('');
}

function renderLibrary() {
  const search = normalize(els.librarySearch.value || '');
  const category = els.libraryCategory.value || 'Tất cả';
  const brand = els.libraryBrand.value || 'Tất cả';

  const filteredDevices = state.devices.filter((device) => {
    const searchable = normalize(
      [
        device.name,
        device.brand,
        device.category,
        device.intro,
        device.usage,
        device.installation,
        ...device.commonIssues.map((item) => `${item.issue} ${item.cause} ${item.solution}`),
        ...device.advancedIssues.map((item) => `${item.issue} ${item.cause} ${item.solution}`),
      ].join(' ')
    );

    const searchMatch = !search || searchable.includes(search);
    const categoryMatch = category === 'Tất cả' || device.category === category;
    const brandMatch = brand === 'Tất cả' || device.brand === brand;
    return searchMatch && categoryMatch && brandMatch;
  });

  els.libraryGrid.innerHTML = filteredDevices
    .map(
      (device) => `
        <article class="device-card" data-device-id="${escapeHtml(device.id)}">
          <div class="meta-line">
            <span class="pill">${escapeHtml(device.category)}</span>
            <span class="pill neutral">${escapeHtml(device.brand)}</span>
          </div>
          <div>
            <h4>${escapeHtml(device.name)}</h4>
            <p>${escapeHtml(device.intro)}</p>
          </div>
          <div class="device-tags">
            <span class="pill success">${device.commonIssues.length} lỗi thường gặp</span>
            <span class="pill warning">${device.advancedIssues.length} lỗi nâng cao</span>
          </div>
          <button class="ghost-button" data-device-id="${escapeHtml(device.id)}">Xem chi tiết</button>
        </article>
      `
    )
    .join('');

  if (filteredDevices.length === 0) {
    els.libraryGrid.innerHTML = `
      <article class="list-card full-width">
        <h4>Không tìm thấy thiết bị phù hợp</h4>
        <p>Hãy thử tìm theo tên hãng, loại thiết bị hoặc mô tả lỗi.</p>
      </article>
    `;
    els.deviceDetailPanel.classList.add('hidden');
    return;
  }

  const currentVisible = filteredDevices.some((device) => device.id === uiState.selectedDeviceId)
    ? uiState.selectedDeviceId
    : filteredDevices[0].id;

  openDeviceDetail(currentVisible, uiState.selectedDeviceTab, false);
}

function openDeviceDetail(deviceId, tab = 'intro', scrollIntoView = false) {
  const device = state.devices.find((item) => item.id === deviceId);
  if (!device) return;

  uiState.selectedDeviceId = deviceId;
  uiState.selectedDeviceTab = tab;

  els.deviceDetailPanel.classList.remove('hidden');
  els.deviceDetailName.textContent = device.name;
  els.deviceDetailMeta.textContent = `${device.category} • ${device.brand}`;

  const tabs = [
    ['intro', 'Giới thiệu'],
    ['usage', 'Hướng dẫn sử dụng'],
    ['installation', 'Cài đặt'],
    ['common', 'Lỗi thường gặp'],
    ['advanced', 'Advanced'],
    ['repair', 'Quy trình sửa chữa'],
    ['media', 'Media'],
  ];

  els.deviceDetailTabs.innerHTML = tabs
    .map(
      ([key, label]) => `
        <button class="detail-tab ${key === tab ? 'active' : ''}" data-device-tab="${escapeHtml(
        key
      )}">${escapeHtml(label)}</button>
      `
    )
    .join('');

  els.deviceDetailContent.innerHTML = renderDeviceDetailContent(device, tab);

  if (scrollIntoView) {
    els.deviceDetailPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderDeviceDetailContent(device, tab) {
  const box = (title, content) => `
    <article class="detail-box">
      <h4>${escapeHtml(title)}</h4>
      ${content}
    </article>
  `;

  if (tab === 'intro') {
    return `
      <div class="detail-content-grid">
        ${box('Giới thiệu thiết bị', `<p>${escapeHtml(device.intro)}</p>`) }
        ${box('Mục tiêu vận hành', `<p>${escapeHtml(device.usage)}</p>`) }
      </div>
    `;
  }

  if (tab === 'usage') {
    return box('Hướng dẫn sử dụng', `<p>${escapeHtml(device.usage)}</p>`);
  }

  if (tab === 'installation') {
    return box('Hướng dẫn cài đặt / lắp đặt', `<p>${escapeHtml(device.installation)}</p>`);
  }

  if (tab === 'common') {
    return `
      <div class="detail-content-grid">
        ${device.commonIssues
          .map(
            (item) =>
              box(
                item.issue,
                `<p><strong>Nguyên nhân:</strong> ${escapeHtml(item.cause)}</p>
                 <p><strong>Cách xử lý:</strong> ${escapeHtml(item.solution)}</p>`
              )
          )
          .join('')}
      </div>
    `;
  }

  if (tab === 'advanced') {
    return `
      <div class="detail-content-grid">
        ${device.advancedIssues
          .map(
            (item) =>
              box(
                item.issue,
                `<p><strong>Phân tích:</strong> ${escapeHtml(item.cause)}</p>
                 <p><strong>Khuyến nghị:</strong> ${escapeHtml(item.solution)}</p>`
              )
          )
          .join('')}
      </div>
    `;
  }

  if (tab === 'repair') {
    return box(
      'Quy trình sửa chữa chuẩn',
      `<ul>${device.repairProcess.map((step) => `<li>${escapeHtml(step)}</li>`).join('')}</ul>`
    );
  }

  return box(
    'Hình ảnh / video / tài liệu đi kèm',
    `<ul>${device.media.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
  );
}

function renderQuestionList() {
  const sorted = [...state.questions].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  els.questionList.innerHTML = sorted
    .map((question) => {
      const acceptedCount = question.answers.filter((answer) => answer.accepted).length;
      const device = state.devices.find((item) => item.id === question.deviceId);
      return `
        <article class="list-card question-card" data-question-id="${escapeHtml(question.id)}">
          <div class="meta-line">
            <span class="pill ${question.status === 'resolved' ? 'success' : 'warning'}">${escapeHtml(
        question.status === 'resolved' ? 'Đã chốt hướng xử lý' : 'Đang mở'
      )}</span>
            <span class="pill neutral">${escapeHtml(device?.name || 'Thiết bị chưa xác định')}</span>
          </div>
          <h4>${escapeHtml(question.title)}</h4>
          <p>${escapeHtml(question.body)}</p>
          <div class="meta-line">
            <span class="pill">${question.answers.length} phản hồi</span>
            <span class="pill ${acceptedCount > 0 ? 'success' : 'neutral'}">${acceptedCount} phản hồi được chọn</span>
            <span class="pill neutral">${escapeHtml(question.author)}</span>
          </div>
        </article>
      `;
    })
    .join('');
}

function openQuestionModal(questionId) {
  const question = state.questions.find((item) => item.id === questionId);
  if (!question) return;
  uiState.selectedQuestionId = questionId;

  const device = state.devices.find((item) => item.id === question.deviceId);

  els.questionModalTitle.textContent = question.title;
  els.questionModalMeta.textContent = `${question.author} • ${formatDateTime(question.createdAt)} • ${device?.name || ''}`;
  els.questionModalBody.innerHTML = `
    <article class="detail-box">
      <div class="meta-line">
        <span class="pill ${question.status === 'resolved' ? 'success' : 'warning'}">${escapeHtml(
    question.status === 'resolved' ? 'Đã chốt hướng xử lý' : 'Đang mở'
  )}</span>
        <span class="pill neutral">${escapeHtml(device?.category || 'Nghiệp vụ')}</span>
      </div>
      <p>${escapeHtml(question.body)}</p>
    </article>
  `;
  renderAnswerList(question);
  els.answerForm.elements.questionId.value = question.id;
  document.body.classList.add('modal-open');
  closeSidebar();
  els.questionModal.classList.remove('hidden');
}

function renderAnswerList(question) {
  const answers = [...question.answers].sort((a, b) => Number(b.accepted) - Number(a.accepted));
  els.questionAnswerList.innerHTML = answers.length
    ? answers
        .map(
          (answer) => `
            <article class="answer-card ${answer.accepted ? 'accepted' : ''}">
              <div class="meta-line">
                <span class="pill ${answer.accepted ? 'success' : 'neutral'}">${escapeHtml(
              answer.accepted ? 'Được chọn' : `${answer.stars} sao`
            )}</span>
                <span class="pill neutral">${escapeHtml(answer.author)}</span>
                <span class="pill neutral">${escapeHtml(formatDateTime(answer.createdAt))}</span>
              </div>
              <p>${escapeHtml(answer.body)}</p>
              <div class="form-actions">
                <button class="ghost-button" data-accept-answer="${escapeHtml(answer.id)}" data-question-id="${escapeHtml(
              question.id
            )}">${answer.accepted ? 'Đã chọn là hiệu quả' : 'Đánh dấu câu trả lời hiệu quả'}</button>
              </div>
            </article>
          `
        )
        .join('')
    : `
      <article class="list-card">
        <h4>Chưa có phản hồi</h4>
        <p>Hãy thêm phương án xử lý để tích lũy tri thức cho đội ngũ.</p>
      </article>
    `;
}

function closeQuestionModal() {
  document.body.classList.remove('modal-open');
  els.questionModal.classList.add('hidden');
}

function toggleSidebar(forceOpen) {
  const nextState = typeof forceOpen === 'boolean' ? forceOpen : !document.body.classList.contains('sidebar-open');
  document.body.classList.toggle('sidebar-open', nextState);
}

function closeSidebar() {
  toggleSidebar(false);
}

function handleViewportResize() {
  if (window.innerWidth > 1180) {
    closeSidebar();
  }
}

function handleEscActions(event) {
  if (event.key !== 'Escape') return;
  closeSidebar();
  if (!els.questionModal.classList.contains('hidden')) {
    closeQuestionModal();
  }
}

function renderTasks() {
  const columns = [
    { key: 'todo', label: 'Chờ thực hiện' },
    { key: 'doing', label: 'Đang thực hiện' },
    { key: 'done', label: 'Hoàn thành' },
  ];

  els.taskBoard.innerHTML = columns
    .map((column) => {
      const tasks = state.tasks.filter((task) => task.status === column.key);
      return `
        <section class="kanban-column">
          <div class="meta-line">
            <h4>${escapeHtml(column.label)}</h4>
            <span class="pill">${tasks.length}</span>
          </div>
          ${tasks
            .map(
              (task) => `
                <article class="task-card" data-task-id="${escapeHtml(task.id)}">
                  <div class="meta-line">
                    <span class="pill neutral">${escapeHtml(task.location)}</span>
                    <span class="pill ${task.status === 'done' ? 'success' : task.status === 'doing' ? 'warning' : 'neutral'}">${escapeHtml(
                taskStatusText(task.status)
              )}</span>
                  </div>
                  <div>
                    <h4>${escapeHtml(task.title)}</h4>
                    <p>Thực hiện: ${escapeHtml(task.assignee)} • Giám sát: ${escapeHtml(task.supervisor)}</p>
                    <p>Hạn: ${escapeHtml(formatDate(task.dueDate))}</p>
                  </div>
                  <div class="task-steps">
                    ${task.steps
                      .map(
                        (step) => `
                          <label class="task-step">
                            <input type="checkbox" data-step-id="${escapeHtml(step.id)}" data-task-id="${escapeHtml(
                          task.id
                        )}" ${step.completed ? 'checked' : ''} ${task.status === 'done' ? 'disabled' : ''} />
                            <span>
                              ${escapeHtml(step.title)}
                              ${
                                step.completed && step.completedAt
                                  ? `<br><small class="muted">${escapeHtml(step.completedBy)} • ${escapeHtml(
                                      formatDateTime(step.completedAt)
                                    )}</small>`
                                  : ''
                              }
                            </span>
                          </label>
                        `
                      )
                      .join('')}
                  </div>
                  <div class="task-actions">
                    ${task.status !== 'todo' ? `<button class="task-action" data-task-move="back" data-task-id="${escapeHtml(task.id)}">Lùi trạng thái</button>` : ''}
                    ${task.status !== 'done' ? `<button class="task-action" data-task-move="next" data-task-id="${escapeHtml(task.id)}">Tiến trạng thái</button>` : ''}
                  </div>
                </article>
              `
            )
            .join('')}
        </section>
      `;
    })
    .join('');
}

function renderMeterTable() {
  const sorted = [...state.meterReports].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  els.meterTableBody.innerHTML = sorted
    .map(
      (report) => `
        <tr>
          <td data-label="DMA">${escapeHtml(report.dma)}<br><small class="muted">${escapeHtml(report.location)}</small></td>
          <td data-label="Chỉ số">${escapeHtml(String(report.current))}<br><small class="muted">Kỳ trước: ${escapeHtml(String(report.previous))}</small></td>
          <td data-label="Biến động"><span class="pill ${varianceClass(report.variance)}">${escapeHtml(report.variance)}</span></td>
          <td data-label="Ảnh">${escapeHtml(report.photoName || 'Không có')}</td>
          <td data-label="Thời gian">${escapeHtml(formatDateTime(report.createdAt))}</td>
        </tr>
      `
    )
    .join('');
}

function renderWorkflowUpgrades() {
  els.workflowUpgradeList.innerHTML = state.workflowUpgrades
    .map(
      (item) => `
        <article class="upgrade-card">
          <div class="meta-line">
            <span class="pill ${workflowPillClass(item.status)}">${escapeHtml(upgradeStatusText(item.status))}</span>
            <span class="pill neutral">${escapeHtml(item.owner)}</span>
          </div>
          <h4>${escapeHtml(item.issue)}</h4>
          <p>${escapeHtml(item.proposedSop)}</p>
          <div class="form-actions">
            <button class="ghost-button" data-workflow-next="${escapeHtml(item.id)}">Chuyển giai đoạn</button>
          </div>
        </article>
      `
    )
    .join('');
}

function renderIdeas() {
  const sorted = [...state.ideas].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  els.ideaList.innerHTML = sorted
    .map(
      (idea) => `
        <article class="list-card">
          <div class="meta-line">
            <span class="pill ${impactClass(idea.impact)}">Tác động ${escapeHtml(impactText(idea.impact))}</span>
            <span class="pill ${ideaStatusClass(idea.status)}">${escapeHtml(ideaStatusText(idea.status))}</span>
          </div>
          <h4>${escapeHtml(idea.title)}</h4>
          <p>${escapeHtml(idea.description)}</p>
          <div class="meta-line">
            <span class="pill neutral">${escapeHtml(idea.author)}</span>
            <span class="pill neutral">${escapeHtml(formatDateTime(idea.createdAt))}</span>
          </div>
          <div class="form-actions">
            <button class="ghost-button" data-idea-next="${escapeHtml(idea.id)}">Chuyển trạng thái</button>
          </div>
        </article>
      `
    )
    .join('');
}

function renderAssistantConversation() {
  els.assistantConversation.innerHTML = state.assistantConversation
    .map(
      (message) => `
        <div class="chat-row ${escapeHtml(message.role)}">
          <div class="chat-bubble">${escapeHtml(message.text)}</div>
        </div>
      `
    )
    .join('');

  els.assistantConversation.scrollTop = els.assistantConversation.scrollHeight;
}

function handleRoleChange(event) {
  state.currentUser.role = event.target.value;
  saveState();
  renderKpis();
}

function handleQuestionSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const question = {
    id: uid('q'),
    title: String(formData.get('title') || '').trim(),
    body: String(formData.get('body') || '').trim(),
    author: `${state.currentUser.name} (${state.currentUser.role})`,
    deviceId: String(formData.get('deviceId') || state.devices[0]?.id || ''),
    createdAt: new Date().toISOString(),
    status: 'open',
    answers: [],
  };

  state.questions.unshift(question);
  saveState();
  event.currentTarget.reset();
  renderToplineStats();
  renderKpis();
  renderLeaderboard();
  renderNotifications();
  renderQuestionList();
  openQuestionModal(question.id);
}

function handleAnswerSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const questionId = String(formData.get('questionId') || '');
  const question = state.questions.find((item) => item.id === questionId);
  if (!question) return;

  question.answers.push({
    id: uid('a'),
    author: String(formData.get('author') || '').trim(),
    body: String(formData.get('body') || '').trim(),
    stars: Number(formData.get('stars') || 5),
    accepted: false,
    createdAt: new Date().toISOString(),
  });

  saveState();
  event.currentTarget.reset();
  event.currentTarget.elements.questionId.value = questionId;
  renderQuestionList();
  renderLeaderboard();
  renderNotifications();
  openQuestionModal(questionId);
}

function handleTaskSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const rawSteps = String(formData.get('steps') || '')
    .split('\n')
    .map((step) => step.trim())
    .filter(Boolean);

  const task = {
    id: uid('task'),
    title: String(formData.get('title') || '').trim(),
    assignee: String(formData.get('assignee') || '').trim(),
    supervisor: String(formData.get('supervisor') || '').trim(),
    location: String(formData.get('location') || '').trim(),
    dueDate: String(formData.get('dueDate') || ''),
    status: 'todo',
    createdAt: new Date().toISOString(),
    steps: (rawSteps.length ? rawSteps : ['Khảo sát hiện trường', 'Xác nhận hoàn thành']).map((step) => ({
      id: uid('step'),
      title: step,
      completed: false,
      completedBy: '',
      completedAt: '',
    })),
  };

  state.tasks.unshift(task);
  saveState();
  event.currentTarget.reset();
  renderToplineStats();
  renderKpis();
  renderNotifications();
  renderTasks();
}

function handleTaskBoardClick(event) {
  const button = event.target.closest('[data-task-move]');
  if (!button) return;

  const task = state.tasks.find((item) => item.id === button.dataset.taskId);
  if (!task) return;

  const direction = button.dataset.taskMove;
  const flow = ['todo', 'doing', 'done'];
  const currentIndex = flow.indexOf(task.status);
  const nextIndex = direction === 'next' ? Math.min(currentIndex + 1, flow.length - 1) : Math.max(currentIndex - 1, 0);
  task.status = flow[nextIndex];

  if (task.status === 'done') {
    task.steps = task.steps.map((step) => ({
      ...step,
      completed: true,
      completedBy: step.completedBy || state.currentUser.name,
      completedAt: step.completedAt || new Date().toISOString(),
    }));
  }

  saveState();
  renderToplineStats();
  renderKpis();
  renderNotifications();
  renderTasks();
}

function handleTaskStepToggle(event) {
  const checkbox = event.target.closest('[data-step-id]');
  if (!checkbox) return;

  const task = state.tasks.find((item) => item.id === checkbox.dataset.taskId);
  if (!task) return;
  const step = task.steps.find((item) => item.id === checkbox.dataset.stepId);
  if (!step) return;

  step.completed = checkbox.checked;
  step.completedBy = checkbox.checked ? state.currentUser.name : '';
  step.completedAt = checkbox.checked ? new Date().toISOString() : '';

  const doneCount = task.steps.filter((item) => item.completed).length;
  if (doneCount === task.steps.length) {
    task.status = 'done';
  } else if (doneCount > 0 && task.status === 'todo') {
    task.status = 'doing';
  } else if (doneCount === 0 && task.status === 'done') {
    task.status = 'doing';
  }

  saveState();
  renderToplineStats();
  renderKpis();
  renderNotifications();
  renderTasks();
}

function runDemoOcr() {
  const photoName = els.meterPhoto.files?.[0]?.name || '';
  const raw = `${els.ocrSource.value || ''} ${photoName}`.trim();
  const extracted = extractLargestNumber(raw);
  if (extracted) {
    els.currentReading.value = extracted;
    els.ocrResult.textContent = `Đã nhận dạng: ${extracted}`;
  } else {
    els.ocrResult.textContent = 'Không nhận dạng được — hãy nhập số vào ô OCR mô phỏng';
  }
}

function handleMeterSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const previous = Number(formData.get('previous') || 0);
  const current = Number(formData.get('current') || 0);

  const report = {
    id: uid('mr'),
    dma: String(formData.get('dma') || '').trim(),
    location: String(formData.get('location') || '').trim(),
    previous,
    current,
    variance: calcVariance(previous, current),
    photoName: els.meterPhoto.files?.[0]?.name || 'Ảnh chưa đính kèm',
    notes: String(formData.get('notes') || '').trim(),
    confirmed: true,
    createdAt: new Date().toISOString(),
    checklist: {
      captureOrder: Boolean(formData.get('captureOrder')),
      focusConfirmed: Boolean(formData.get('focusConfirmed')),
      locationConfirmed: Boolean(formData.get('locationConfirmed')),
      safetyConfirmed: Boolean(formData.get('safetyConfirmed')),
    },
  };

  state.meterReports.unshift(report);
  saveState();
  event.currentTarget.reset();
  els.ocrResult.textContent = 'Chưa nhận dạng';
  renderKpis();
  renderMeterTable();
  renderNotifications();
}

function handleIdeaSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  state.ideas.unshift({
    id: uid('idea'),
    title: String(formData.get('title') || '').trim(),
    author: String(formData.get('author') || '').trim(),
    impact: String(formData.get('impact') || 'medium'),
    status: 'reviewing',
    createdAt: new Date().toISOString(),
    description: String(formData.get('description') || '').trim(),
  });

  saveState();
  event.currentTarget.reset();
  renderKpis();
  renderLeaderboard();
  renderIdeas();
}

function handleIdeaListClick(event) {
  const button = event.target.closest('[data-idea-next]');
  if (!button) return;

  const idea = state.ideas.find((item) => item.id === button.dataset.ideaNext);
  if (!idea) return;

  const flow = ['reviewing', 'pilot', 'approved'];
  const nextIndex = (flow.indexOf(idea.status) + 1) % flow.length;
  idea.status = flow[nextIndex];
  saveState();
  renderKpis();
  renderLeaderboard();
  renderIdeas();
}

function handleWorkflowClick(event) {
  const button = event.target.closest('[data-workflow-next]');
  if (!button) return;

  const item = state.workflowUpgrades.find((workflow) => workflow.id === button.dataset.workflowNext);
  if (!item) return;

  const flow = ['researching', 'standardizing', 'pilot', 'published'];
  const nextIndex = (flow.indexOf(item.status) + 1) % flow.length;
  item.status = flow[nextIndex];
  saveState();
  renderWorkflowUpgrades();
  renderNotifications();
}

function handleAssistantSubmit(event) {
  event.preventDefault();
  const query = els.assistantInput.value.trim();
  if (!query) return;
  submitAssistantQuery(query);
  event.currentTarget.reset();
}

function submitAssistantQuery(query) {
  if (!query) return;

  state.assistantConversation.push({ role: 'user', text: query });
  state.assistantConversation.push({
    role: 'assistant',
    text: generateAssistantResponse(query),
  });

  saveState();
  renderAssistantConversation();
}

function generateAssistantResponse(query) {
  const normalized = normalize(query);
  const deviceMatches = scoreDocuments(
    state.devices.map((device) => ({
      id: device.id,
      type: 'device',
      title: device.name,
      content: `${device.category} ${device.brand} ${device.intro} ${device.usage} ${device.installation} ${device.commonIssues
        .map((item) => `${item.issue} ${item.cause} ${item.solution}`)
        .join(' ')} ${device.advancedIssues.map((item) => `${item.issue} ${item.solution}`).join(' ')}`,
      ref: device,
    })),
    normalized
  );

  const questionMatches = scoreDocuments(
    state.questions.map((question) => ({
      id: question.id,
      type: 'question',
      title: question.title,
      content: `${question.body} ${question.answers.map((answer) => answer.body).join(' ')}`,
      ref: question,
    })),
    normalized
  );

  const ideaMatches = scoreDocuments(
    [...state.ideas, ...state.workflowUpgrades].map((item) => ({
      id: item.id,
      type: item.proposedSop ? 'workflow' : 'idea',
      title: item.title || item.issue,
      content: `${item.description || ''} ${item.proposedSop || ''}`,
      ref: item,
    })),
    normalized
  );

  const lines = ['Tôi đã tra cứu kho tri thức nội bộ của PWC WaterCare AI.'];

  if (containsAny(normalized, ['van giam ap', 'prv', 'bermad']) && deviceMatches[0]?.ref) {
    const device = deviceMatches[0].ref;
    const issue = device.commonIssues[0];
    lines.push('');
    lines.push(`Thiết bị liên quan nhiều nhất: ${device.name} (${device.brand}).`);
    lines.push(`- Gợi ý ưu tiên: ${issue.solution}`);
    lines.push(`- Bước kiểm tra tiếp theo: ${device.repairProcess.slice(0, 3).join(' → ')}`);
  }

  if (containsAny(normalized, ['dong ho', 'chot so', 'ocr', 'dma'])) {
    lines.push('');
    lines.push('Gợi ý cho nghiệp vụ chốt số đồng hồ:');
    lines.push('- Mở báo cáo theo DMA và bắt buộc đi theo checklist chuẩn.');
    lines.push('- Chuẩn hóa ảnh chụp thẳng mặt số, đủ sáng, rõ nét và đúng thứ tự.');
    lines.push('- Dùng OCR để tự điền chỉ số, sau đó người dùng chỉ xác nhận lại trước khi lưu.');
  }

  if (containsAny(normalized, ['logger', 'data logger', 'mat ket noi', 'du lieu'])) {
    lines.push('');
    lines.push('Khuyến nghị kiểm tra logger:');
    lines.push('- Kiểm tra điện áp pin và nhật ký reset.');
    lines.push('- Kiểm tra sóng / vị trí anten / cấu hình truyền.');
    lines.push('- So sánh dữ liệu thiếu với khung giờ vận hành thực tế để loại trừ mất nguồn cục bộ.');
  }

  if (containsAny(normalized, ['giao viec', 'phan cong', 'giam sat'])) {
    lines.push('');
    lines.push('Luồng giao việc chuẩn nên gồm: giao việc → nhận việc → cập nhật công đoạn → giám sát xác nhận → đóng hồ sơ kèm thời gian.');
  }

  if (deviceMatches.length) {
    lines.push('');
    lines.push('Tài liệu / thiết bị liên quan:');
    deviceMatches.slice(0, 2).forEach((match) => {
      lines.push(`- ${match.ref.name}: ${match.ref.intro}`);
    });
  }

  if (questionMatches.length) {
    lines.push('');
    lines.push('Tình huống nội bộ tương tự:');
    questionMatches.slice(0, 2).forEach((match) => {
      const topAnswer = match.ref.answers.sort((a, b) => Number(b.accepted) - Number(a.accepted) || b.stars - a.stars)[0];
      lines.push(`- ${match.ref.title}`);
      if (topAnswer) {
        lines.push(`  Hướng xử lý nổi bật: ${topAnswer.body}`);
      }
    });
  }

  if (ideaMatches.length) {
    lines.push('');
    lines.push('Sáng kiến / quy trình có thể áp dụng:');
    ideaMatches.slice(0, 2).forEach((match) => {
      lines.push(`- ${match.title}`);
    });
  }

  if (!deviceMatches.length && !questionMatches.length && !ideaMatches.length) {
    lines.push('');
    lines.push('Hiện chưa có tài liệu khớp mạnh trong demo. Bạn có thể bổ sung thêm dữ liệu thiết bị, lịch sử sự cố hoặc SOP để AI trả lời tốt hơn.');
  }

  lines.push('');
  lines.push('Lưu ý: đây là trợ lý AI demo chạy trên dữ liệu nội bộ mẫu ở frontend. Khi triển khai thật, có thể nối LLM + vector search + OCR + cơ sở dữ liệu để trả lời chính xác hơn.');

  return lines.join('\n');
}

function handleGlobalClicks(event) {
  const deviceButton = event.target.closest('[data-device-id]');
  if (deviceButton) {
    openDeviceDetail(deviceButton.dataset.deviceId, 'intro', true);
  }

  const tabButton = event.target.closest('[data-device-tab]');
  if (tabButton) {
    openDeviceDetail(uiState.selectedDeviceId, tabButton.dataset.deviceTab);
  }

  const questionCard = event.target.closest('[data-question-id]');
  if (questionCard && !event.target.closest('[data-accept-answer]')) {
    openQuestionModal(questionCard.dataset.questionId);
  }

  const acceptButton = event.target.closest('[data-accept-answer]');
  if (acceptButton) {
    const question = state.questions.find((item) => item.id === acceptButton.dataset.questionId);
    if (!question) return;
    question.answers.forEach((answer) => {
      answer.accepted = answer.id === acceptButton.dataset.acceptAnswer;
    });
    question.status = 'resolved';
    saveState();
    renderToplineStats();
    renderKpis();
    renderLeaderboard();
    renderNotifications();
    renderQuestionList();
    openQuestionModal(question.id);
  }
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let currentId = '';

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 160 && rect.bottom >= 160) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
}

function resetSeedData() {
  const confirmed = window.confirm('Khôi phục toàn bộ dữ liệu mẫu ban đầu?');
  if (!confirmed) return;
  state = clone(seedData);
  saveState();
  ensureInitialSelections();
  els.librarySearch.value = '';
  els.ocrResult.textContent = 'Chưa nhận dạng';
  renderApp();
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.error('Không thể tải dữ liệu:', error);
    return null;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setOptions(select, items) {
  const current = select.value;
  select.innerHTML = items.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join('');
  if (items.includes(current)) {
    select.value = current;
  }
}

function scoreDocuments(documents, query) {
  const keywords = query.split(' ').filter((item) => item.length > 1);
  return documents
    .map((doc) => {
      const content = normalize(`${doc.title} ${doc.content}`);
      const score = keywords.reduce((sum, keyword) => sum + (content.includes(keyword) ? 1 : 0), 0);
      return { ...doc, score };
    })
    .filter((doc) => doc.score > 0)
    .sort((a, b) => b.score - a.score);
}

function containsAny(text, keywords) {
  return keywords.some((keyword) => text.includes(normalize(keyword)));
}

function averageQuestionStars() {
  const stars = state.questions.flatMap((question) => question.answers.map((answer) => Number(answer.stars)));
  if (!stars.length) return '0.0';
  return (stars.reduce((sum, value) => sum + value, 0) / stars.length).toFixed(1);
}

function bumpScore(map, name, score, reason) {
  const existing = map.get(name) || { score: 0, reasons: [] };
  existing.score += score;
  existing.reasons.push(reason);
  map.set(name, existing);
}

function uid(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatDate(dateValue) {
  if (!dateValue) return '-';
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return String(dateValue);
  return date.toLocaleDateString('vi-VN');
}

function formatDateTime(dateValue) {
  if (!dateValue) return '-';
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return String(dateValue);
  return `${date.toLocaleDateString('vi-VN')} ${date.toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
  })}`;
}

function extractLargestNumber(text) {
  const matches = String(text || '').match(/\d{4,12}/g);
  if (!matches?.length) return '';
  return matches.sort((a, b) => b.length - a.length)[0];
}

function calcVariance(previous, current) {
  if (!previous) return '0.00%';
  const variance = ((current - previous) / previous) * 100;
  return `${variance.toFixed(2)}%`;
}

function varianceClass(value) {
  const num = Number(String(value).replace('%', ''));
  if (num > 1) return 'warning';
  if (num < 0) return 'danger';
  return 'success';
}

function taskStatusText(status) {
  return (
    {
      todo: 'Chờ thực hiện',
      doing: 'Đang thực hiện',
      done: 'Hoàn thành',
    }[status] || status
  );
}

function impactText(impact) {
  return (
    {
      low: 'thấp',
      medium: 'trung bình',
      high: 'cao',
    }[impact] || impact
  );
}

function impactClass(impact) {
  return impact === 'high' ? 'danger' : impact === 'medium' ? 'warning' : 'neutral';
}

function ideaStatusText(status) {
  return (
    {
      reviewing: 'Đang xem xét',
      pilot: 'Đang pilot',
      approved: 'Đã duyệt',
    }[status] || status
  );
}

function ideaStatusClass(status) {
  return status === 'approved' ? 'success' : status === 'pilot' ? 'warning' : 'neutral';
}

function upgradeStatusText(status) {
  return (
    {
      researching: 'Đang nghiên cứu',
      standardizing: 'Đang chuẩn hóa',
      pilot: 'Đang pilot',
      published: 'Đã ban hành',
    }[status] || status
  );
}

function workflowPillClass(status) {
  return status === 'published' ? 'success' : status === 'pilot' ? 'warning' : 'neutral';
}
