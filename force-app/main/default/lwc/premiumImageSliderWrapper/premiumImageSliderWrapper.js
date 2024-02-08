import { LightningElement } from 'lwc';
import CarouselImages from '@salesforce/resourceUrl/HostelBookingImages';
export default class PremiumImageSliderWrapper extends LightningElement {
    slides = [{
        image:`${CarouselImages}/CarouselImages/Premium001.jpg`,
        heading:'Room 1',
        desc:'Description part here'
    },
    {
        image:`${CarouselImages}/CarouselImages/Premium002.jpg`,
        heading:'Room 2',
        desc:'Description part here'
    },
    {
        image:`${CarouselImages}/CarouselImages/Premium003.jpg`,
        heading:'Room 3',
        desc:'Description part here'
    }]
}



// import { LightningElement, api, wire } from 'lwc';
// import { getRecord } from 'lightning/uiRecordApi';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// export default class PremiumImageCarouselWrapper extends LightningElement {
//     @api recordId;
//     slides = [];
//     files = [];

//     connectedCallback() {
//         // Fetch files from Chatter
//         this.fetchChatterFiles();
//     }

//     fetchChatterFiles() {
//         // Construct the Chatter API URL
//         const chatterApiUrl = `/services/data/v59.0/chatter/feeds/record/${this.recordId}/feed-elements`;
//         console.log("chatter API URL", chatterApiUrl)

//         // Make an HTTP GET request to the Chatter API
//         fetch(chatterApiUrl, {
//             method: 'GET',
//             headers: {
//                 'Authorization': 'Bearer ' + window.sessionStorage.getItem('accessToken')
//             }
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             console.log("response ", response.json());
//             return response.json();
//         })
//         .then(data => {
//             // Extract file information from the response
//             console.log("data", data)
//             this.files = data.elements
//                 .filter(element => element.type === 'ContentPost')
//                 .map(element => ({
//                     id: element.id,
//                     fileName: element.body.attachment.attachments[0].attachmentType.name,
//                     fileUrl: element.body.attachment.attachments[0].url
//                 }));
            
//             // Generate slides from fetched files
//             this.slides = this.files.map(file => ({
//                 image: file.fileUrl,
//                 heading: file.fileName,
//                 desc: 'Description part here'
//             }));
//         })
//         .catch(error => {
//             console.error('Fetch error:', error);
//             // Show error toast
//             this.showToast('Error', 'Failed to fetch files from Chatter', 'error');
//         });
//     }

//     showToast(title, message, variant) {
//         const toastEvent = new ShowToastEvent({
//             title: title,
//             message: message,
//             variant: variant
//         });
//         this.dispatchEvent(toastEvent);
//     }
// }
