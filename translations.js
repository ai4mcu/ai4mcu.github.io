// translations.js - AI-EDU-KIT for MCU 다국어 지원

// 기본 언어 사전 (한국어, 영어)
const translations = {
    // 메인 페이지
    main_title: {
        ko: "AI-EDU-KIT for MCU",
        en: "AI-EDU-KIT for MCU"
    },
    main_subtitle: {
        ko: "영상처리 인공지능을 활용해 하드웨어를 제어하는 멋진 경험을 해보세요.",
        en: "Experience the amazing control of hardware using computer vision AI."
    },
    main_description: {
        ko: "마이크로비트, 아두이노, ESP32, RP 피코를 유선과 무선으로 연결해 제어할 수 있어요.",
        en: "Connect and control micro:bit, Arduino, ESP32, RP Pico via wired and wireless connections."
    },
    tm_title: {
        ko: "TM 올인원 서비스",
        en: "TM All-in-One Service"
    },
    tm_description: {
        ko: "Teachable Machine으로 학습한 이미지, 포즈, 음성 모델을 사용하여 MCU를 제어합니다.",
        en: "Control MCU using image, pose, and voice models trained with Teachable Machine."
    },
    face_title: {
        ko: "얼굴 인식 올인원 서비스",
        en: "Face Recognition All-in-One Service"
    },
    face_description: {
        ko: "MediaPipe 미간 좌표, 하품, 눈 깜박임, 얼굴 개수, 크기 등을 사용하여 MCU를 제어합니다.",
        en: "Control MCU using MediaPipe glabella coordinates, yawning, blinking, face count, size, etc."
    },
    hand_title: {
        ko: "손가락인식 올인원 서비스",
        en: "Hand Recognition All-in-One Service"
    },
    hand_description: {
        ko: "MediaPipe로 검지좌표, 엄지-검지 길이, 손가락 카운팅, 양손 검지좌표 등을 사용하여 MCU를 제어합니다.",
        en: "Control MCU using MediaPipe index finger coordinates, thumb-index distance, finger counting, dual hand coordinates, etc."
    },
    voice_title: {
        ko: "음성인식 서비스",
        en: "Voice Recognition Service"
    },
    voice_description: {
        ko: "Google의 Web Speech API로 음성인식 결과를 사용하여 MCU를 제어합니다.",
        en: "Control MCU using voice recognition results with Google's Web Speech API."
    },
    go_to_service: {
        ko: "서비스 바로가기",
        en: "Go to Service"
    },
    coming_soon: {
        ko: "개발중",
        en: "Coming Soon"
    },
    footer_copyright: {
        ko: "© 2025 AI-EDU-KIT. All Rights Reserved.",
        en: "© 2025 AI-EDU-KIT. All Rights Reserved."
    },
    footer_developed_by: {
        ko: "Developed by Seok-jeon Kim : alphaco@kakao.com",
        en: "Developed by Seok-jeon Kim : alphaco@kakao.com"
    },
    visitors_total: {
        ko: "방문자: ",
        en: "Visitors: "
    },
    visitors_today: {
        ko: "오늘: ",
        en: "Today: "
    },
    visitors_unique: {
        ko: "순방문자: ",
        en: "Unique: "
    },

    // TM 페이지
    tm_page_title: {
        ko: "🤖 TM All-in-One for MCU",
        en: "🤖 TM All-in-One for MCU"
    },
    tm_page_subtitle: {
        ko: "Teachable Machine 통합 인터페이스 - 이미지, 포즈, 음성 인식",
        en: "Teachable Machine integrated interface - Image, Pose, Voice recognition"
    },
    tab_image: {
        ko: "📷 이미지 인식",
        en: "📷 Image Recognition"
    },
    tab_pose: {
        ko: "🏃 포즈 인식",
        en: "🏃 Pose Recognition"
    },
    tab_voice: {
        ko: "🎤 음성 인식",
        en: "🎤 Voice Recognition"
    },
    image_model_settings: {
        ko: "📷 이미지 모델 설정",
        en: "📷 Image Model Settings"
    },
    pose_model_settings: {
        ko: "🏃 포즈 모델 설정",
        en: "🏃 Pose Model Settings"
    },
    voice_model_settings: {
        ko: "🎤 음성 모델 설정",
        en: "🎤 Voice Model Settings"
    },
    tm_model_url_image: {
        ko: "Teachable Machine 이미지 모델 URL",
        en: "Teachable Machine Image Model URL"
    },
    tm_model_url_pose: {
        ko: "Teachable Machine 포즈 모델 URL",
        en: "Teachable Machine Pose Model URL"
    },
    tm_model_url_voice: {
        ko: "Teachable Machine 음성 모델 URL",
        en: "Teachable Machine Voice Model URL"
    },
    threshold: {
        ko: "인식 임계값 (0-100)",
        en: "Recognition Threshold (0-100)"
    },
    load_model: {
        ko: "모델 로드",
        en: "Load Model"
    },
    start: {
        ko: "시작",
        en: "Start"
    },
    stop: {
        ko: "정지",
        en: "Stop"
    },
    start_voice: {
        ko: "음성 인식 시작",
        en: "Start Voice Recognition"
    },
    webcam_select: {
        ko: "웹캠 선택",
        en: "Select Webcam"
    },

    // 핸드 페이지
    hand_page_title: {
        ko: "✋ 손가락 인식 올인원",
        en: "✋ Hand Recognition All-in-One"
    },
    hand_page_subtitle: {
        ko: "MediaPipe의 손 인식 기술을 활용한 다양한 기능을 제공합니다.",
        en: "Various functions using MediaPipe hand recognition technology."
    },
    tab_hand_coords: {
        ko: "👆 검지좌표",
        en: "👆 Index Coords"
    },
    tab_thumb_dist: {
        ko: "📏 엄지-검지 길이",
        en: "📏 Thumb-Index Distance"
    },
    tab_finger_count: {
        ko: "🖐️ 손가락 카운팅",
        en: "🖐️ Finger Counting"
    },
    tab_dual_coords: {
        ko: "✌️ 양손 검지좌표",
        en: "✌️ Dual Hand Coords"
    },
    tab_hand_service5: {
        ko: "✨ 서비스 5",
        en: "✨ Service 5"
    },
    tab_hand_service6: {
        ko: "✨ 서비스 6",
        en: "✨ Service 6"
    },
    index_finger_coords: {
        ko: "검지 끝 좌표",
        en: "Index Finger Tip Coordinates"
    },
    thumb_index_dist: {
        ko: "엄지-검지 사이 거리",
        en: "Thumb-Index Distance"
    },
    total_finger_count: {
        ko: "총 손가락 개수",
        en: "Total Finger Count"
    },
    left_hand: {
        ko: "왼손",
        en: "Left Hand"
    },
    right_hand: {
        ko: "오른손",
        en: "Right Hand"
    },
    dual_hand_coords: {
        ko: "양손 검지 좌표",
        en: "Dual Hand Index Coordinates"
    },

    // 얼굴 페이지
    face_page_title: {
        ko: "😀 얼굴 인식 올인원",
        en: "😀 Face Recognition All-in-One"
    },
    face_page_subtitle: {
        ko: "MediaPipe의 얼굴 인식 기술을 활용한 다양한 기능을 제공합니다.",
        en: "Various functions using MediaPipe face recognition technology."
    },
    tab_face_coords: {
        ko: "📍 미간 좌표",
        en: "📍 Glabella Coords"
    },
    tab_yawn: {
        ko: "👄 하품 감지",
        en: "👄 Yawn Detection"
    },
    tab_blink: {
        ko: "👁️ 눈 깜박임",
        en: "👁️ Blink Detection"
    },
    tab_face_count: {
        ko: "👨‍👩‍👧‍👦 얼굴 개수",
        en: "👨‍👩‍👧‍👦 Face Count"
    },
    tab_face_size: {
        ko: "📏 얼굴 크기",
        en: "📏 Face Size"
    },
    tab_face_service6: {
        ko: "✨ 서비스 6",
        en: "✨ Service 6"
    },
    glabella_coords: {
        ko: "미간 중심 좌표",
        en: "Glabella Center Coordinates"
    },
    mouth_open_size: {
        ko: "입 벌림 크기",
        en: "Mouth Opening Size"
    },
    blink_status: {
        ko: "눈 깜박임 상태 (1: 깜박임, 0: 평상시)",
        en: "Blink Status (1: Blinking, 0: Normal)"
    },
    left_eye: {
        ko: "왼쪽:",
        en: "Left:"
    },
    right_eye: {
        ko: "오른쪽:",
        en: "Right:"
    },
    both_eyes: {
        ko: "양쪽:",
        en: "Both:"
    },
    detected_face_count: {
        ko: "감지된 얼굴 개수",
        en: "Detected Face Count"
    },
    unit_faces: {
        ko: "개",
        en: "faces"
    },
    face_box_size: {
        ko: "얼굴 상자 크기 (너비, 높이)",
        en: "Face Box Size (Width, Height)"
    },

    // 음성 페이지
    voice_page_title: {
        ko: "🎤 음성인식 서비스",
        en: "🎤 Voice Recognition Service"
    },
    voice_page_subtitle: {
        ko: "Google Web Speech API를 사용하여 음성으로 MCU를 제어합니다.",
        en: "Control MCU with voice using Google Web Speech API."
    },
    voice_recognition_control: {
        ko: "음성인식 제어",
        en: "Voice Recognition Control"
    },
    language_select: {
        ko: "언어 선택",
        en: "Language Selection"
    },
    start_recognition: {
        ko: "인식 시작",
        en: "Start Recognition"
    },
    stop_recognition: {
        ko: "인식 정지",
        en: "Stop Recognition"
    },
    recognition_waiting: {
        ko: "인식 대기중",
        en: "Recognition Waiting"
    },
    voice_recognizing: {
        ko: "음성 인식 중...",
        en: "Voice Recognizing..."
    },
    recognition_error: {
        ko: "인식 오류",
        en: "Recognition Error"
    },
    final_recognized_sentence: {
        ko: "최종 인식된 문장:",
        en: "Final Recognized Sentence:"
    },
    command_transmission_settings: {
        ko: "명령어/전송 값 설정 (최대 20개)",
        en: "Command/Transmission Value Settings (Max 20)"
    },
    word_to_recognize_placeholder: {
        ko: "인식할 단어 (예: 불 켜)",
        en: "Word to recognize (e.g., turn on)"
    },
    transmission_value_placeholder: {
        ko: "전송 값 (예: 1)",
        en: "Transmission value (e.g., 1)"
    },
    max_commands_limit: {
        ko: "명령어는 최대 20개까지 추가할 수 있습니다.",
        en: "You can add up to 20 commands maximum."
    },
    browser_not_supported: {
        ko: "이 브라우저는 음성 인식을 지원하지 않습니다. Chrome 브라우저를 사용해주세요.",
        en: "This browser does not support voice recognition. Please use Chrome browser."
    },
    guide_voice_1: {
        ko: "사용할 언어를 선택합니다.",
        en: "Select the language to use."
    },
    guide_voice_2: {
        ko: "'+' 버튼을 눌러 인식할 단어와 MCU로 보낼 값을 설정합니다. (최대 20개)",
        en: "Press the '+' button to set words to recognize and values to send to MCU. (Max 20)"
    },
    guide_voice_3: {
        ko: "시리얼 또는 블루투스로 제어할 장치를 연결합니다.",
        en: "Connect the device to control via Serial or Bluetooth."
    },
    guide_voice_4: {
        ko: "'인식 시작' 버튼을 누르고 설정한 단어를 포함하여 말합니다.",
        en: "Press 'Start Recognition' button and speak including the set words."
    },
    guide_voice_5: {
        ko: "단어가 인식되면 해당 칸이 붉게 강조되며 설정된 값이 자동으로 전송됩니다.",
        en: "When a word is recognized, the corresponding field is highlighted in red and the set value is automatically transmitted."
    },
    back_to_main: {
        ko: "메인으로 돌아가기",
        en: "Back to Main"
    },

    // 공통 요소
    connection_settings: {
        ko: "🔌 연결 설정",
        en: "🔌 Connection Settings"
    },
    ble_device_type: {
        ko: "블루투스 장치 유형",
        en: "Bluetooth Device Type"
    },
    microbit_device: {
        ko: "마이크로비트 (이름으로 검색)",
        en: "micro:bit (Search by name)"
    },
    generic_uart_device: {
        ko: "일반 UART 장치 (Arduino, ESP32 등)",
        en: "Generic UART Device (Arduino, ESP32, etc.)"
    },
    serial_connect: {
        ko: "시리얼 연결",
        en: "Serial Connect"
    },
    serial_disconnect: {
        ko: "해제",
        en: "Disconnect"
    },
    ble_connect: {
        ko: "블루투스 연결",
        en: "Bluetooth Connect"
    },
    ble_disconnect: {
        ko: "해제",
        en: "Disconnect"
    },
    status_connected: {
        ko: "{connectionType} 연결됨",
        en: "{connectionType} Connected"
    },
    status_disconnected: {
        ko: "연결 안됨",
        en: "Not Connected"
    },
    start_recognition: {
        ko: "인식 시작",
        en: "Start Recognition"
    },
    loading_model: {
        ko: "모델 로딩중...",
        en: "Loading Model..."
    },
    recognizing: {
        ko: "인식중...",
        en: "Recognizing..."
    },
    status_waiting: {
        ko: "대기 중...",
        en: "Waiting..."
    },

    // 사용 가이드
    usage_guide: {
        ko: "💡 사용 방법",
        en: "💡 Usage Guide"
    },
    guide_tm_1: {
        ko: "사용할 인식 모드(이미지/포즈/음성)를 선택하세요.",
        en: "Select the recognition mode (Image/Pose/Voice) to use."
    },
    guide_tm_2: {
        ko: "Teachable Machine에서 학습한 모델 URL을 입력하세요.",
        en: "Enter the trained model URL from Teachable Machine."
    },
    guide_tm_3: {
        ko: "연결할 장치(시리얼 또는 블루투스)를 선택하고 연결하세요.",
        en: "Select and connect the device (Serial or Bluetooth)."
    },
    guide_tm_4: {
        ko: "모델을 로드하고 시작 버튼을 누르세요.",
        en: "Load the model and press the start button."
    },
    guide_tm_5: {
        ko: "인식된 결과가 자동으로 MCU로 전송됩니다.",
        en: "Recognition results are automatically sent to MCU."
    },
    guide_hand_1: {
        ko: "상단 탭에서 원하는 손 인식 기능을 선택하세요.",
        en: "Select the desired hand recognition function from the top tabs."
    },
    guide_hand_2: {
        ko: "'인식 시작' 버튼을 클릭하여 카메라를 활성화하세요.",
        en: "Click 'Start Recognition' button to activate the camera."
    },
    guide_hand_3: {
        ko: "MCU 장치를 시리얼 또는 블루투스로 연결하세요.",
        en: "Connect MCU device via Serial or Bluetooth."
    },
    guide_hand_4: {
        ko: "손이 인식되면 실시간으로 데이터가 MCU로 전송됩니다.",
        en: "When hands are detected, data is transmitted to MCU in real-time."
    },
    guide_hand_5: {
        ko: "MCU에서 수신한 데이터를 활용하여 다양한 출력장치를 제어하세요.",
        en: "Use the received data on MCU to control various output devices."
    },
    guide_face_1: {
        ko: "상단 탭에서 원하는 얼굴 인식 기능을 선택하세요.",
        en: "Select the desired face recognition function from the top tabs."
    },
    guide_face_2: {
        ko: "'인식 시작' 버튼을 클릭하여 카메라를 활성화하세요.",
        en: "Click 'Start Recognition' button to activate the camera."
    },
    guide_face_3: {
        ko: "MCU 장치를 시리얼 또는 블루투스로 연결하세요.",
        en: "Connect MCU device via Serial or Bluetooth."
    },
    guide_face_4: {
        ko: "얼굴이 인식되면 실시간으로 데이터가 MCU로 전송됩니다.",
        en: "When faces are detected, data is transmitted to MCU in real-time."
    },
    guide_face_5: {
        ko: "MCU에서 수신한 데이터를 활용하여 다양한 출력장치를 제어하세요.",
        en: "Use the received data on MCU to control various output devices."
    },

    // 개발자 정보
    developer_info: {
        ko: "👨‍💻 개발자 정보",
        en: "👨‍💻 Developer Information"
    },
    developer_name: {
        ko: "김석전, 송도중학교 정보교사 / 인하대학교 겸임교수 📅 Since 2023.04.24 | 📧 alphaco@kakao.com",
        en: "Kim Seok-jeon, Information Teacher at Songdo Middle School / Adjunct Professor at Inha University 📅 Since 2023.04.24 | 📧 alphaco@kakao.com"
    },
    developer_info_tm: {
        ko: "WebSerial과 WebBLE를 이용해 TM 결과를 유/무선 MCU로 전송하는 웹앱입니다.",
        en: "Web app that transmits TM results to wired/wireless MCU using WebSerial and WebBLE."
    },
    developer_info_hand: {
        ko: "WebSerial과 WebBLE를 이용해 손가락 인식 결과를 유/무선으로 MCU에 전송하는 웹앱입니다.",
        en: "Web app that transmits hand recognition results to MCU via wired/wireless using WebSerial and WebBLE."
    },
    developer_info_face: {
        ko: "WebSerial과 WebBLE를 이용해 얼굴 인식 결과를 유/무선으로 MCU에 전송하는 웹앱입니다.",
        en: "Web app that transmits face recognition results to MCU via wired/wireless using WebSerial and WebBLE."
    },
    developer_info_voice: {
        ko: "WebSerial과 WebBLE를 이용해 음성 인식 결과를 유/무선 MCU로 전송하는 웹앱입니다.",
        en: "Web app that transmits voice recognition results to wired/wireless MCU using WebSerial and WebBLE."
    },
    app_description_2: {
        ko: "✅ 아두이노, 마이크로비트, ESP32, 라즈베리파이 피코 등 모든 MCU를 사용할 수 있습니다.",
        en: "✅ Compatible with all MCUs including Arduino, micro:bit, ESP32, Raspberry Pi Pico, etc."
    },
    app_description_3: {
        ko: "🌐 Chrome, Edge 브라우저에서 테스트 되었습니다.",
        en: "🌐 Tested on Chrome and Edge browsers."
    },
    app_description_5: {
        ko: "🚀 인공지능에 다양한 출력장치를 연결하여 AIoT 애플리케이션을 제작해 보세요.",
        en: "🚀 Create AIoT applications by connecting various output devices to AI."
    },
    ccl: {
        ko: "📜 CCL: BY-NC-ND",
        en: "📜 CCL: BY-NC-ND"
    },

    // 에러 메시지 및 알림
    enter_model_url: {
        ko: "{modelType} 모델 URL을 입력하세요!",
        en: "Please enter {modelType} model URL!"
    },
    model_loaded: {
        ko: "{modelType} 모델이 로드되었습니다!",
        en: "{modelType} model loaded successfully!"
    },
    model_load_failed: {
        ko: "모델 로드 실패: {error}",
        en: "Model load failed: {error}"
    },
    recognition_result: {
        ko: "인식 결과: {result}",
        en: "Recognition Result: {result}"
    },
    serial_connect_error: {
        ko: "시리얼 연결 실패: {error}",
        en: "Serial connection failed: {error}"
    },
    ble_connect_success: {
        ko: "블루투스 연결 성공!",
        en: "Bluetooth connected successfully!"
    },
    ble_connect_error: {
        ko: "블루투스 연결 실패: {error}",
        en: "Bluetooth connection failed: {error}"
    },
    voice_recognition_started: {
        ko: "음성 인식이 시작되었습니다!",
        en: "Voice recognition started!"
    },
    no_webcam: {
        ko: "웹캠이 없습니다",
        en: "No webcam available"
    },
    webcam_permission: {
        ko: "웹캠 권한이 필요합니다",
        en: "Webcam permission required"
    },
    webcam_changed: {
        ko: "웹캠이 {webcamName}로 변경되었습니다.",
        en: "Webcam changed to {webcamName}."
    },
    context_menu_blocked: {
        ko: "우클릭은 금지되어 있습니다.",
        en: "Right-click is disabled."
    },

    // 관리자 기능
    admin_log_button: {
        ko: "🔒 관리자 로그",
        en: "🔒 Admin Log"
    },
    download_csv_button: {
        ko: "📄 CSV 다운로드",
        en: "📄 Download CSV"
    },
    admin_log_title: {
        ko: "관리자 방문자 로그",
        en: "Admin Visitor Log"
    }
};

// 현재 언어 감지
let currentLanguage = 'ko';

// 언어 감지 함수
function detectLanguage() {
    // 브라우저 언어 감지
    const browserLang = navigator.language || navigator.languages[0] || 'ko';
    
    // 지원하는 언어 목록 (기본 사전에 있는 언어들)
    const supportedLanguages = ['ko', 'en'];
    
    // 브라우저 언어가 지원되는지 확인
    const detectedLang = browserLang.substring(0, 2);
    
    if (supportedLanguages.includes(detectedLang)) {
        return detectedLang;
    }
    
    // 지원되지 않는 언어면 영어로 기본 설정
    return 'en';
}

// 자동 번역 API 함수 (Google Translate 또는 기타 서비스 사용)
async function translateText(text, targetLang) {
    try {
        // 실제 구현에서는 Google Translate API 등을 사용
        // 여기서는 간단한 예시로 구현
        
        // 기본 사전에 있는 경우 바로 반환
        if (translations[text] && translations[text][targetLang]) {
            return translations[text][targetLang];
        }
        
        // 자동 번역이 필요한 경우 (실제로는 API 호출)
        // 현재는 기본값 반환
        return text;
        
    } catch (error) {
        console.error('Translation error:', error);
        return text;
    }
}

// 번역 함수
function _t(key, params = {}) {
    try {
        // 기본 사전에서 찾기
        if (translations[key] && translations[key][currentLanguage]) {
            let text = translations[key][currentLanguage];
            
            // 매개변수 치환
            Object.keys(params).forEach(param => {
                text = text.replace(new RegExp(`{${param}}`, 'g'), params[param]);
            });
            
            return text;
        }
        
        // 한국어 기본값이 있는 경우
        if (translations[key] && translations[key]['ko']) {
            return translations[key]['ko'];
        }
        
        // 키를 찾을 수 없는 경우 키 자체 반환
        return key;
        
    } catch (error) {
        console.error('Translation function error:', error);
        return key;
    }
}

// 페이지의 모든 번역 가능한 요소 업데이트
function updatePageTranslations() {
    const elementsWithTranslateKey = document.querySelectorAll('[data-translate-key]');
    
    elementsWithTranslateKey.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        const translatedText = _t(key);
        
        // 입력 요소의 placeholder 처리
        if (element.tagName.toLowerCase() === 'input' && element.hasAttribute('placeholder')) {
            element.placeholder = translatedText;
        } else {
            element.textContent = translatedText;
        }
    });
}

// 언어 설정 함수
function setLanguage(lang = null) {
    if (lang) {
        currentLanguage = lang;
    } else {
        currentLanguage = detectLanguage();
    }
    
    // localStorage에 언어 설정 저장
    try {
        localStorage.setItem('ai-edu-kit-language', currentLanguage);
    } catch (e) {
        console.warn('Cannot save language preference:', e);
    }
    
    updatePageTranslations();
}

// 저장된 언어 설정 불러오기
function loadSavedLanguage() {
    try {
        const savedLang = localStorage.getItem('ai-edu-kit-language');
        if (savedLang && ['ko', 'en'].includes(savedLang)) {
            currentLanguage = savedLang;
            return;
        }
    } catch (e) {
        console.warn('Cannot load language preference:', e);
    }
    
    // 저장된 설정이 없으면 자동 감지
    currentLanguage = detectLanguage();
}

// 언어 변경 이벤트 리스너 추가 (필요시 사용)
function addLanguageSelector() {
    // 페이지에 언어 선택기를 추가하고 싶을 때 사용
    const languageSelector = document.createElement('select');
    languageSelector.id = 'language-selector';
    languageSelector.innerHTML = `
        <option value="ko">🇰🇷 한국어</option>
        <option value="en">🇺🇸 English</option>
    `;
    
    languageSelector.value = currentLanguage;
    languageSelector.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
    
    return languageSelector;
}

// 초기화 함수
function initializeTranslations() {
    loadSavedLanguage();
    updatePageTranslations();
    
    // DOM이 변경될 때마다 번역 업데이트 (옵션)
    if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const elementsWithTranslateKey = node.querySelectorAll ? 
                            node.querySelectorAll('[data-translate-key]') : [];
                        elementsWithTranslateKey.forEach(element => {
                            const key = element.getAttribute('data-translate-key');
                            const translatedText = _t(key);
                            if (element.tagName.toLowerCase() === 'input' && element.hasAttribute('placeholder')) {
                                element.placeholder = translatedText;
                            } else {
                                element.textContent = translatedText;
                            }
                        });
                    }
                });
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}

// 페이지 로드 시 자동 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTranslations);
} else {
    initializeTranslations();
}

// 전역 함수로 노출
window.setLanguage = setLanguage;
window._t = _t;
window.addLanguageSelector = addLanguageSelector;