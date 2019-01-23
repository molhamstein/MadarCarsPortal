import { LoginService } from './login.service';
import { CallApiService } from './call-api.service';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DatePipe } from '@angular/common';


@Injectable()
export class GlobalService {
  notification;
  unreadNot;

  private unreadNotBeh = new BehaviorSubject<number>(0);
  private notificationBeh = new BehaviorSubject<any>([]);

  private filteringBeh = new BehaviorSubject<any>({});

  castUnreadNotBeh = this.unreadNotBeh.asObservable();
  castNotificationBeh = this.notificationBeh.asObservable();
  castFilteringBeh = this.filteringBeh.asObservable();
  constructor(private router: Router, private route: ActivatedRoute, public APIServe: CallApiService, public logInSer: LoginService) {
    this.notification = [];
    this.unreadNot = 0;

    this.roles['manager'] = []
    this.roles['manager']["ReadCalendar"] = true
    this.roles['manager']["ReadForms"] = true
    this.roles['manager']["WriteCalendar"] = true
    this.roles['manager']["WriteForms"] = true
    this.roles['manager']["Open/BlockCalendar"] = true
    this.roles['manager']["UserDefinition"] = true


    this.roles['consultant'] = []
    this.roles['consultant']["ReadCalendar"] = true
    this.roles['consultant']["ReadForms"] = true
    this.roles['consultant']["WriteCalendar"] = true
    this.roles['consultant']["WriteForms"] = true
    this.roles['consultant']["Open/BlockCalendar"] = true
    this.roles['consultant']["UserDefinition"] = false

    this.roles['adminstrator'] = []
    this.roles['adminstrator']["ReadCalendar"] = true
    this.roles['adminstrator']["ReadForms"] = true
    this.roles['adminstrator']["WriteCalendar"] = true
    this.roles['adminstrator']["WriteForms"] = true
    this.roles['adminstrator']["Open/BlockCalendar"] = false
    this.roles['adminstrator']["UserDefinition"] = false


    this.roles['secretary'] = []
    this.roles['secretary']["ReadCalendar"] = true
    this.roles['secretary']["ReadForms"] = true
    this.roles['secretary']["WriteCalendar"] = false
    this.roles['secretary']["WriteForms"] = false
    this.roles['secretary']["Open/BlockCalendar"] = false
    this.roles['secretary']["UserDefinition"] = false


    this.roles['reception'] = [];
    this.roles['reception']["ReadCalendar"] = true
    this.roles['reception']["ReadForms"] = false
    this.roles['reception']["WriteCalendar"] = false
    this.roles['reception']["WriteForms"] = false
    this.roles['reception']["Open/BlockCalendar"] = false
    this.roles['reception']["UserDefinition"] = false

    this.pagesRole['superAdmin'] = []


    this.pagesRole['admin'] = []
    this.pagesRole['admin']['admins'] = false
    this.pagesRole['admin']['add-admin'] = false
    this.pagesRole['admin']['edit-admin'] = false





  }


  private isoCode = [
    { "name": "Afghanistan", "isoCode": "AF" },
    { "name": "land Islands", "isoCode": "AX" },
    { "name": "Albania", "isoCode": "AL" },
    { "name": "Algeria", "isoCode": "DZ" },
    { "name": "American Samoa", "isoCode": "AS" },
    { "name": "AndorrA", "isoCode": "AD" },
    { "name": "Angola", "isoCode": "AO" },
    { "name": "Anguilla", "isoCode": "AI" },
    { "name": "Antarctica", "isoCode": "AQ" },
    { "name": "Antigua and Barbuda", "isoCode": "AG" },
    { "name": "Argentina", "isoCode": "AR" },
    { "name": "Armenia", "isoCode": "AM" },
    { "name": "Aruba", "isoCode": "AW" },
    { "name": "Australia", "isoCode": "AU" },
    { "name": "Austria", "isoCode": "AT" },
    { "name": "Azerbaijan", "isoCode": "AZ" },
    { "name": "Bahamas", "isoCode": "BS" },
    { "name": "Bahrain", "isoCode": "BH" },
    { "name": "Bangladesh", "isoCode": "BD" },
    { "name": "Barbados", "isoCode": "BB" },
    { "name": "Belarus", "isoCode": "BY" },
    { "name": "Belgium", "isoCode": "BE" },
    { "name": "Belize", "isoCode": "BZ" },
    { "name": "Benin", "isoCode": "BJ" },
    { "name": "Bermuda", "isoCode": "BM" },
    { "name": "Bhutan", "isoCode": "BT" },
    { "name": "Bolivia", "isoCode": "BO" },
    { "name": "Bosnia and Herzegovina", "isoCode": "BA" },
    { "name": "Botswana", "isoCode": "BW" },
    { "name": "Bouvet Island", "isoCode": "BV" },
    { "name": "Brazil", "isoCode": "BR" },
    { "name": "British Indian Ocean Territory", "isoCode": "IO" },
    { "name": "Brunei Darussalam", "isoCode": "BN" },
    { "name": "Bulgaria", "isoCode": "BG" },
    { "name": "Burkina Faso", "isoCode": "BF" },
    { "name": "Burundi", "isoCode": "BI" },
    { "name": "Cambodia", "isoCode": "KH" },
    { "name": "Cameroon", "isoCode": "CM" },
    { "name": "Canada", "isoCode": "CA" },
    { "name": "Cape Verde", "isoCode": "CV" },
    { "name": "Cayman Islands", "isoCode": "KY" },
    { "name": "Central African Republic", "isoCode": "CF" },
    { "name": "Chad", "isoCode": "TD" },
    { "name": "Chile", "isoCode": "CL" },
    { "name": "China", "isoCode": "CN" },
    { "name": "Christmas Island", "isoCode": "CX" },
    { "name": "Cocos (Keeling) Islands", "isoCode": "CC" },
    { "name": "Colombia", "isoCode": "CO" },
    { "name": "Comoros", "isoCode": "KM" },
    { "name": "Congo", "isoCode": "CG" },
    { "name": "Congo, The Democratic Republic of the", "isoCode": "CD" },
    { "name": "Cook Islands", "isoCode": "CK" },
    { "name": "Costa Rica", "isoCode": "CR" },
    { "name": "Cote D'Ivoire", "isoCode": "CI" },
    { "name": "Croatia", "isoCode": "HR" },
    { "name": "Cuba", "isoCode": "CU" },
    { "name": "Cyprus", "isoCode": "CY" },
    { "name": "Czech Republic", "isoCode": "CZ" },
    { "name": "Denmark", "isoCode": "DK" },
    { "name": "Djibouti", "isoCode": "DJ" },
    { "name": "Dominica", "isoCode": "DM" },
    { "name": "Dominican Republic", "isoCode": "DO" },
    { "name": "Ecuador", "isoCode": "EC" },
    { "name": "Egypt", "isoCode": "EG" },
    { "name": "El Salvador", "isoCode": "SV" },
    { "name": "Equatorial Guinea", "isoCode": "GQ" },
    { "name": "Eritrea", "isoCode": "ER" },
    { "name": "Estonia", "isoCode": "EE" },
    { "name": "Ethiopia", "isoCode": "ET" },
    { "name": "Falkland Islands (Malvinas)", "isoCode": "FK" },
    { "name": "Faroe Islands", "isoCode": "FO" },
    { "name": "Fiji", "isoCode": "FJ" },
    { "name": "Finland", "isoCode": "FI" },
    { "name": "France", "isoCode": "FR" },
    { "name": "French Guiana", "isoCode": "GF" },
    { "name": "French Polynesia", "isoCode": "PF" },
    { "name": "French Southern Territories", "isoCode": "TF" },
    { "name": "Gabon", "isoCode": "GA" },
    { "name": "Gambia", "isoCode": "GM" },
    { "name": "Georgia", "isoCode": "GE" },
    { "name": "Germany", "isoCode": "DE" },
    { "name": "Ghana", "isoCode": "GH" },
    { "name": "Gibraltar", "isoCode": "GI" },
    { "name": "Greece", "isoCode": "GR" },
    { "name": "Greenland", "isoCode": "GL" },
    { "name": "Grenada", "isoCode": "GD" },
    { "name": "Guadeloupe", "isoCode": "GP" },
    { "name": "Guam", "isoCode": "GU" },
    { "name": "Guatemala", "isoCode": "GT" },
    { "name": "Guernsey", "isoCode": "GG" },
    { "name": "Guinea", "isoCode": "GN" },
    { "name": "Guinea-Bissau", "isoCode": "GW" },
    { "name": "Guyana", "isoCode": "GY" },
    { "name": "Haiti", "isoCode": "HT" },
    { "name": "Heard Island and Mcdonald Islands", "isoCode": "HM" },
    { "name": "Holy See (Vatican City State)", "isoCode": "VA" },
    { "name": "Honduras", "isoCode": "HN" },
    { "name": "Hong Kong", "isoCode": "HK" },
    { "name": "Hungary", "isoCode": "HU" },
    { "name": "Iceland", "isoCode": "IS" },
    { "name": "India", "isoCode": "IN" },
    { "name": "Indonesia", "isoCode": "ID" },
    { "name": "Iran, Islamic Republic Of", "isoCode": "IR" },
    { "name": "Iraq", "isoCode": "IQ" },
    { "name": "Ireland", "isoCode": "IE" },
    { "name": "Isle of Man", "isoCode": "IM" },
    { "name": "Israel", "isoCode": "IL" },
    { "name": "Italy", "isoCode": "IT" },
    { "name": "Jamaica", "isoCode": "JM" },
    { "name": "Japan", "isoCode": "JP" },
    { "name": "Jersey", "isoCode": "JE" },
    { "name": "Jordan", "isoCode": "JO" },
    { "name": "Kazakhstan", "isoCode": "KZ" },
    { "name": "Kenya", "isoCode": "KE" },
    { "name": "Kiribati", "isoCode": "KI" },
    { "name": "Korea, Democratic People'S Republic of", "isoCode": "KP" },
    { "name": "Korea, Republic of", "isoCode": "KR" },
    { "name": "Kuwait", "isoCode": "KW" },
    { "name": "Kyrgyzstan", "isoCode": "KG" },
    { "name": "Lao People'S Democratic Republic", "isoCode": "LA" },
    { "name": "Latvia", "isoCode": "LV" },
    { "name": "Lebanon", "isoCode": "LB" },
    { "name": "Lesotho", "isoCode": "LS" },
    { "name": "Liberia", "isoCode": "LR" },
    { "name": "Libyan Arab Jamahiriya", "isoCode": "LY" },
    { "name": "Liechtenstein", "isoCode": "LI" },
    { "name": "Lithuania", "isoCode": "LT" },
    { "name": "Luxembourg", "isoCode": "LU" },
    { "name": "Macao", "isoCode": "MO" },
    { "name": "Macedonia, The Former Yugoslav Republic of", "isoCode": "MK" },
    { "name": "Madagascar", "isoCode": "MG" },
    { "name": "Malawi", "isoCode": "MW" },
    { "name": "Malaysia", "isoCode": "MY" },
    { "name": "Maldives", "isoCode": "MV" },
    { "name": "Mali", "isoCode": "ML" },
    { "name": "Malta", "isoCode": "MT" },
    { "name": "Marshall Islands", "isoCode": "MH" },
    { "name": "Martinique", "isoCode": "MQ" },
    { "name": "Mauritania", "isoCode": "MR" },
    { "name": "Mauritius", "isoCode": "MU" },
    { "name": "Mayotte", "isoCode": "YT" },
    { "name": "Mexico", "isoCode": "MX" },
    { "name": "Micronesia, Federated States of", "isoCode": "FM" },
    { "name": "Moldova, Republic of", "isoCode": "MD" },
    { "name": "Monaco", "isoCode": "MC" },
    { "name": "Mongolia", "isoCode": "MN" },
    { "name": "Montenegro", "isoCode": "ME" },
    { "name": "Montserrat", "isoCode": "MS" },
    { "name": "Morocco", "isoCode": "MA" },
    { "name": "Mozambique", "isoCode": "MZ" },
    { "name": "Myanmar", "isoCode": "MM" },
    { "name": "Namibia", "isoCode": "NA" },
    { "name": "Nauru", "isoCode": "NR" },
    { "name": "Nepal", "isoCode": "NP" },
    { "name": "Netherlands", "isoCode": "NL" },
    { "name": "Netherlands Antilles", "isoCode": "AN" },
    { "name": "New Caledonia", "isoCode": "NC" },
    { "name": "New Zealand", "isoCode": "NZ" },
    { "name": "Nicaragua", "isoCode": "NI" },
    { "name": "Niger", "isoCode": "NE" },
    { "name": "Nigeria", "isoCode": "NG" },
    { "name": "Niue", "isoCode": "NU" },
    { "name": "Norfolk Island", "isoCode": "NF" },
    { "name": "Northern Mariana Islands", "isoCode": "MP" },
    { "name": "Norway", "isoCode": "NO" },
    { "name": "Oman", "isoCode": "OM" },
    { "name": "Pakistan", "isoCode": "PK" },
    { "name": "Palau", "isoCode": "PW" },
    { "name": "Palestinian Territory, Occupied", "isoCode": "PS" },
    { "name": "Panama", "isoCode": "PA" },
    { "name": "Papua New Guinea", "isoCode": "PG" },
    { "name": "Paraguay", "isoCode": "PY" },
    { "name": "Peru", "isoCode": "PE" },
    { "name": "Philippines", "isoCode": "PH" },
    { "name": "Pitcairn", "isoCode": "PN" },
    { "name": "Poland", "isoCode": "PL" },
    { "name": "Portugal", "isoCode": "PT" },
    { "name": "Puerto Rico", "isoCode": "PR" },
    { "name": "Qatar", "isoCode": "QA" },
    { "name": "Reunion", "isoCode": "RE" },
    { "name": "Romania", "isoCode": "RO" },
    { "name": "Russian Federation", "isoCode": "RU" },
    { "name": "RWANDA", "isoCode": "RW" },
    { "name": "Saint Helena", "isoCode": "SH" },
    { "name": "Saint Kitts and Nevis", "isoCode": "KN" },
    { "name": "Saint Lucia", "isoCode": "LC" },
    { "name": "Saint Pierre and Miquelon", "isoCode": "PM" },
    { "name": "Saint Vincent and the Grenadines", "isoCode": "VC" },
    { "name": "Samoa", "isoCode": "WS" },
    { "name": "San Marino", "isoCode": "SM" },
    { "name": "Sao Tome and Principe", "isoCode": "ST" },
    { "name": "Saudi Arabia", "isoCode": "SA" },
    { "name": "Senegal", "isoCode": "SN" },
    { "name": "Serbia", "isoCode": "RS" },
    { "name": "Seychelles", "isoCode": "SC" },
    { "name": "Sierra Leone", "isoCode": "SL" },
    { "name": "Singapore", "isoCode": "SG" },
    { "name": "Slovakia", "isoCode": "SK" },
    { "name": "Slovenia", "isoCode": "SI" },
    { "name": "Solomon Islands", "isoCode": "SB" },
    { "name": "Somalia", "isoCode": "SO" },
    { "name": "South Africa", "isoCode": "ZA" },
    { "name": "South Georgia and the South Sandwich Islands", "isoCode": "GS" },
    { "name": "Spain", "isoCode": "ES" },
    { "name": "Sri Lanka", "isoCode": "LK" },
    { "name": "Sudan", "isoCode": "SD" },
    { "name": "Suriname", "isoCode": "SR" },
    { "name": "Svalbard and Jan Mayen", "isoCode": "SJ" },
    { "name": "Swaziland", "isoCode": "SZ" },
    { "name": "Sweden", "isoCode": "SE" },
    { "name": "Switzerland", "isoCode": "CH" },
    { "name": "Syrian Arab Republic", "isoCode": "SY" },
    { "name": "Taiwan, Province of China", "isoCode": "TW" },
    { "name": "Tajikistan", "isoCode": "TJ" },
    { "name": "Tanzania, United Republic of", "isoCode": "TZ" },
    { "name": "Thailand", "isoCode": "TH" },
    { "name": "Timor-Leste", "isoCode": "TL" },
    { "name": "Togo", "isoCode": "TG" },
    { "name": "Tokelau", "isoCode": "TK" },
    { "name": "Tonga", "isoCode": "TO" },
    { "name": "Trinidad and Tobago", "isoCode": "TT" },
    { "name": "Tunisia", "isoCode": "TN" },
    { "name": "Turkey", "isoCode": "TR" },
    { "name": "Turkmenistan", "isoCode": "TM" },
    { "name": "Turks and Caicos Islands", "isoCode": "TC" },
    { "name": "Tuvalu", "isoCode": "TV" },
    { "name": "Uganda", "isoCode": "UG" },
    { "name": "Ukraine", "isoCode": "UA" },
    { "name": "United Arab Emirates", "isoCode": "AE" },
    { "name": "United Kingdom", "isoCode": "GB" },
    { "name": "United States", "isoCode": "US" },
    { "name": "United States Minor Outlying Islands", "isoCode": "UM" },
    { "name": "Uruguay", "isoCode": "UY" },
    { "name": "Uzbekistan", "isoCode": "UZ" },
    { "name": "Vanuatu", "isoCode": "VU" },
    { "name": "Venezuela", "isoCode": "VE" },
    { "name": "Viet Nam", "isoCode": "VN" },
    { "name": "Virgin Islands, British", "isoCode": "VG" },
    { "name": "Virgin Islands, U.S.", "isoCode": "VI" },
    { "name": "Wallis and Futuna", "isoCode": "WF" },
    { "name": "Western Sahara", "isoCode": "EH" },
    { "name": "Yemen", "isoCode": "YE" },
    { "name": "Zambia", "isoCode": "ZM" },
    { "name": "Zimbabwe", "isoCode": "ZW" }
  ]


  getIsoCode() {
    return this.isoCode;
  }
  private diff_minutes(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60);
    return Math.abs(Math.round(diff));

  }

  private diff_hours(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));

  }

  private diff_days(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff));

  }

  calculatDateAdv(date) {
    var time = this.diff_minutes(new Date(), new Date(date))
    var pipe = new DatePipe('en-US'); // Use your own locale

    if (time < 1)
      return "الأن"
    else if (time < 60)
      return time + " دقيقة ";
    else if (this.diff_hours(new Date(), new Date(date)) < 24)
      return this.diff_hours(new Date(), new Date(date)) + " ساعة ";
    else if (this.diff_days(new Date(), new Date(date)) < 7)
      return this.diff_days(new Date(), new Date(date)) + " يوم ";
    else
      return pipe.transform(date, 'dd-MM-yyyy');


  }

  goTo(newURL) {
    this.router.navigate([newURL]);
  }
  reload() {
    location.reload();
  }

  errorDialog(title, containt, withRefrech: boolean = false) {
    // let dialogRef = this.dialog.open(ErrorModalComponent, {
    //   width: '50%',
    //   data: { title: title, containt: containt }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   if (withRefrech == true) {
    //     location.reload();
    //   }
    // });
  }





  roles = []
  pagesRole = [];
  convertNumber(fromNum) {
    console.log("fromNum");
    console.log(fromNum);
    console.log("fromNum.length");
    console.log(fromNum.length);
    var result = "";
    var number;
    var arabicMap = {
      '٩': 9,
      '٨': 8,
      '٧': 7,
      '٦': 6,
      '٥': 5,
      '٤': 4,
      '٣': 3,
      '٢': 2,
      '١': 1,
      '٠': 0
    };
    for (var index = 0; index < fromNum.length; index++) {
      var element = fromNum.charAt(index);
      console.log("element");
      console.log(element);
      if (arabicMap[element] != null)
        result += arabicMap[element];
      else
        result += element;
    };
    console.log("result");
    console.log(result);
    number = Number(result);
    console.log("number");
    console.log(number);
    return number;
  }

  // isAllowed(role) {
  //   let typeUser = this.logInSer.getType();
  //   if (typeUser == null)
  //     return false
  //   return this.roles[typeUser][role];
  // }

  isAllowedPage(page) {
    // return true
    var typeUser = this.logInSer.getType();    
    if (this.pagesRole[typeUser][page] == null)
      return true
    else
      return false
  }

}
