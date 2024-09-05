// components/SMSButton.jsx
'use client';

import axios from 'axios';

const SMSButtonTwo = ({ phone, islemdurumIki }) => {
  const sendSMS = async () => {
    try {
      const data = JSON.stringify({
        api_id: '9f40cead97881e7a22e143f6',
        api_key: '4a257b8a2d71f9ddc365c202', // Your API key
        sender: 'USTA HOUSE',
        message_type: 'normal', // Set to "turkce" if needed
         message: `Merhaba USTA HOUSE müşterisi, işlem durumunuz: ${islemdurumIki}` || 'Durum bilgisi mevcut değil',
        message_content_type: 'bilgi', // "ticari" for commercial SMS
        phones: [phone],
      });

      const config = {
        method: 'post',
        url: 'https://api.vatansms.net/api/v1/1toN',
        headers: {
          'Content-Type': 'application/json',
        },
        data,
      };

      const response = await axios(config);
      console.log('SMS sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  return (
    <button onClick={sendSMS}>
    Sms gönder    </button>
  );
};

export default SMSButtonTwo;
