const informative_mail = async ( title = '', message = '') => {

    var logoUrl = "https://xpertlab.com/wp-content/uploads/2019/09/XpertLab-Private-Limited.png" ;
    var tmplate = "";
    //template header starts
    tmplate += '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:lato, \'helvetica neue\', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">';
    tmplate += '<head>';
    tmplate += '<meta charset="UTF-8">';
    tmplate += '<meta content="width=device-width, initial-scale=1" name="viewport">';
    tmplate += '<meta name="x-apple-disable-message-reformatting">';
    tmplate += '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
    tmplate += '<meta content="telephone=no" name="format-detection">';
    tmplate += '<title>'+title+'</title>';
    tmplate += '<link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet">';
  
    tmplate += '<style type="text/css">';
    tmplate += '#outlook a {';
    tmplate += 'padding: 0;';
    tmplate += '}';
  
    tmplate += '.ExternalClass {';
    tmplate += 'width: 100%;';
    tmplate += '}';
  
    tmplate += '.ExternalClass,';
    tmplate += '.ExternalClass p,';
    tmplate += '.ExternalClass span,';
    tmplate += '.ExternalClass font,';
    tmplate += '.ExternalClass td,';
    tmplate += '.ExternalClass div {';
    tmplate += 'line-height: 100%;';
    tmplate += '}';
  
    tmplate += '.es-button {';
    tmplate += 'mso-style-priority: 100!important;';
    tmplate += 'text-decoration: none!important;';
    tmplate += '}';
  
    tmplate += 'a[x-apple-data-detectors] {';
    tmplate += 'color: inherit!important;';
    tmplate += 'text-decoration: none!important;';
    tmplate += 'font-size: inherit!important;';
    tmplate += 'font-family: inherit!important;';
    tmplate += 'font-weight: inherit!important;';
    tmplate += 'line-height: inherit!important;';
    tmplate += '}';
  
    tmplate += '.es-desk-hidden {';
    tmplate += 'display: none;';
    tmplate += 'float: left;';
    tmplate += 'overflow: hidden;';
    tmplate += 'width: 0;';
    tmplate += 'max-height: 0;';
    tmplate += 'line-height: 0;';
    tmplate += 'mso-hide: all;';
    tmplate += '}';
  
    tmplate += '.re-buttom{';
    tmplate += 'margin: 10px;';
    tmplate += 'border: none;';
    tmplate += 'background: #ab0e1e;';
    tmplate += 'color: white;';
    tmplate += 'border-radius: 5px;';
    tmplate += 'padding: 10px;';
    tmplate += 'width: 250px;';
    tmplate += 'cursor: pointer;';
    tmplate += '}';
  
    tmplate += '[data-ogsb] .es-button {';
    tmplate += 'border-width: 0!important;';
    tmplate += 'padding: 15px 25px 15px 25px!important;';
    tmplate += '}';
  
    tmplate += '@media only screen and (max-width:600px) {';
    tmplate += 'p,';
    tmplate += 'ul li,';
    tmplate += 'ol li,';
    tmplate += 'a {';
    tmplate += 'line-height: 150%!important';
    tmplate += '}';
  
    tmplate += 'h1,';
    tmplate += 'h2,';
    tmplate += 'h3,';
    tmplate += 'h1 a,';
    tmplate += 'h2 a,';
    tmplate += 'h3 a {';
    tmplate += 'line-height: 120%!important';
    tmplate += '}';
  
    tmplate += 'h1 {';
    tmplate += 'font-size: 30px!important;';
    tmplate += 'text-align: center';
    tmplate += '}';
  
    tmplate += 'h2 {';
    tmplate += 'font-size: 26px!important;';
    tmplate += 'text-align: center';
    tmplate += '}';
  
    tmplate += 'h3 {';
    tmplate += 'font-size: 20px!important;';
    tmplate += 'text-align: center';
    tmplate += '}';
  
    tmplate += '.es-header-body h1 a,';
    tmplate += '.es-content-body h1 a,';
    tmplate += '.es-footer-body h1 a {';
    tmplate += 'font-size: 30px!important';
    tmplate += '}';
  
    tmplate += '.es-header-body h2 a,';
    tmplate += '.es-content-body h2 a,';
    tmplate += '.es-footer-body h2 a {';
    tmplate += 'font-size: 26px!important';
    tmplate += '}';
  
    tmplate += '.es-header-body h3 a,';
    tmplate += '.es-content-body h3 a,';
    tmplate += '.es-footer-body h3 a {';
    tmplate += 'font-size: 20px!important';
    tmplate += '}';
  
    tmplate += '.es-menu td a {';
    tmplate += 'font-size: 16px!important';
    tmplate += '}';
  
    tmplate += '.es-header-body p,';
    tmplate += '.es-header-body ul li,';
    tmplate += '.es-header-body ol li,';
    tmplate += '.es-header-body a {';
    tmplate += 'font-size: 16px!important';
    tmplate += '}';
  
    tmplate += '.es-content-body p,';
    tmplate += '.es-content-body ul li,';
    tmplate += '.es-content-body ol li,';
    tmplate += '.es-content-body a {';
    tmplate += 'font-size: 16px!important';
    tmplate += '}';
  
    tmplate += '.es-footer-body p,';
    tmplate += '.es-footer-body ul li,';
    tmplate += '.es-footer-body ol li,';
    tmplate += '.es-footer-body a {';
    tmplate += 'font-size: 16px!important';
    tmplate += '}';
  
    tmplate += '.es-infoblock p,';
    tmplate += '.es-infoblock ul li,';
    tmplate += '.es-infoblock ol li,';
    tmplate += '.es-infoblock a {';
    tmplate += 'font-size: 12px!important';
    tmplate += '}';
  
    tmplate += '*[class="gmail-fix"] {';
    tmplate += 'display: none!important';
    tmplate += '}';
  
    tmplate += '.es-m-txt-c,';
    tmplate += '.es-m-txt-c h1,';
    tmplate += '.es-m-txt-c h2,';
    tmplate += '.es-m-txt-c h3 {';
    tmplate += 'text-align: center!important';
    tmplate += '}';
  
    tmplate += '.es-m-txt-r,';
    tmplate += '.es-m-txt-r h1,';
    tmplate += '.es-m-txt-r h2,';
    tmplate += '.es-m-txt-r h3 {';
    tmplate += 'text-align: right!important';
    tmplate += '}';
  
    tmplate += '.es-m-txt-l,';
    tmplate += '.es-m-txt-l h1,';
    tmplate += '.es-m-txt-l h2,';
    tmplate += '.es-m-txt-l h3 {';
    tmplate += 'text-align: left!important';
    tmplate += '}';
  
    tmplate += '.es-m-txt-r img,';
    tmplate += '.es-m-txt-c img,';
    tmplate += '.es-m-txt-l img {';
    tmplate += 'display: inline!important';
    tmplate += '}';
  
    tmplate += 'es-button-border {';
    tmplate += 'display: block!important';
    tmplate += '}';
  
    tmplate += 'a.es-button,';
    tmplate += 'button.es-button {';
    tmplate += 'font-size: 20px!important;';
    tmplate += 'display: block!important;';
    tmplate += 'border-width: 15px 25px 15px 25px!important';
    tmplate += '}';
  
    tmplate += '.es-btn-fw {';
    tmplate += 'border-width: 10px 0px!important;';
    tmplate += 'text-align: center!important';
    tmplate += '}';
  
    tmplate += '.es-adaptive table,';
    tmplate += '.es-btn-fw,';
    tmplate += '.es-btn-fw-brdr,';
    tmplate += '.es-left,';
    tmplate += '.es-right {';
    tmplate += 'width: 100%!important';
    tmplate += '}';
  
    tmplate += '.es-content table,';
    tmplate += '.es-header table,';
    tmplate += '.es-footer table,';
    tmplate += '.es-content,';
    tmplate += '.es-footer,';
    tmplate += '.es-header {';
    tmplate += 'width: 100%!important;';
    tmplate += 'max-width: 600px!important';
    tmplate += '}';
  
    tmplate += '.es-adapt-td {';
    tmplate += 'display: block!important;';
    tmplate += 'width: 100%!important';
    tmplate += '}';
  
    tmplate += '.adapt-img {';
    tmplate += 'width: 100%!important;';
    tmplate += 'height: auto!important';
    tmplate += '}';
  
    tmplate += '.es-m-p0 {';
    tmplate += 'padding: 0px!important';
    tmplate += '}';
  
    tmplate += '.es-m-p0r {';
    tmplate += 'padding-right: 0px!important';
    tmplate += '}';
  
    tmplate += '.es-m-p0l {';
    tmplate += 'padding-left: 0px!important';
    tmplate += '}';
  
    tmplate += '.es-m-p0t {';
    tmplate += 'padding-top: 0px!important';
    tmplate += '}';
  
    tmplate += '.es-m-p0b {';
    tmplate += 'padding-bottom: 0!important';
    tmplate += '}';
  
    tmplate += '.es-m-p20b {';
    tmplate += 'padding-bottom: 20px!important';
    tmplate += '}';
  
    tmplate += '.es-mobile-hidden,';
    tmplate += '.es-hidden {';
    tmplate += 'display: none!important';
    tmplate += '}';
  
    tmplate += 'tr.es-desk-hidden,';
    tmplate += 'td.es-desk-hidden,';
    tmplate += 'table.es-desk-hidden {';
    tmplate += 'width: auto!important;';
    tmplate += 'overflow: visible!important;';
    tmplate += 'float: none!important;';
    tmplate += 'max-height: inherit!important;';
    tmplate += 'line-height: inherit!important';
    tmplate += '}';
  
    tmplate += 'tr.es-desk-hidden {';
    tmplate += 'display: table-row!important';
    tmplate += '}';
  
    tmplate += 'table.es-desk-hidden {';
    tmplate += 'display: table!important';
    tmplate += '}';
  
    tmplate += 'td.es-desk-menu-hidden {';
    tmplate += 'display: table-cell!important';
    tmplate += '}';
  
    tmplate += '.es-menu td {';
    tmplate += 'width: 1%!important';
    tmplate += '}';
  
    tmplate += 'table.es-table-not-adapt,';
    tmplate += '.esd-block-html table {';
    tmplate += 'width: auto!important';
    tmplate += '}';
  
    tmplate += 'table.es-social {';
    tmplate += 'display: inline-block!important';
    tmplate += '}';
  
    tmplate += 'table.es-social td {';
    tmplate += 'display: inline-block!important';
    tmplate += '}';
    tmplate += '}';
    tmplate += '</style>';
    tmplate += '</head>';
    tmplate += '<body style="width:100%;font-family:lato, \'helvetica neue\', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> ';
    tmplate += '<div class="es-wrapper-color" style="background-color:#F4F4F4"> ';
    tmplate += '<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> ';
    tmplate += '<tr class="gmail-fix" height="0" style="border-collapse:collapse"> ';
    tmplate += '<td style="padding:0;Margin:0"> ';
    tmplate += '<table cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:600px"> ';
    tmplate += '<tr style="border-collapse:collapse"> ';
    tmplate += '<td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px" height="0"><img src="https://viiirc.stripocdn.email/content/guids/CABINET_837dc1d79e3a5eca5eb1609bfe9fd374/images/41521605538834349.png" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:600px;width:600px" alt width="600" height="1"></td> ';
    tmplate += '</tr> ';
    tmplate += '</table> ';
    tmplate += '</td> ';
    tmplate += '</tr> ';
    tmplate += '<tr style="border-collapse:collapse"> ';
    tmplate += '<td valign="top" style="padding:0;Margin:0"> ';
    tmplate += '<table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background: linear-gradient(#292826 100%, #292826 100%);background-repeat:repeat;background-position:center top"> ';
    tmplate += '<tr style="border-collapse:collapse"> ';
    tmplate += '<td align="center" style="padding:0;Margin:0;background: linear-gradient(#292826 100%, #292826 100%);> ';
    tmplate += '<table class="es-header-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"> ';
    tmplate += '<tr style="border-collapse:collapse"> ';
    tmplate += '<td align="left" style="Margin:0;padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px"> ';
    tmplate += '<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> ';
    tmplate += '<tr style="border-collapse:collapse"> ';
    tmplate += '<td valign="top" align="center" style="padding:0;Margin:0;width:580px"> ';
    tmplate += '<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> ';
    tmplate += '<tr style="border-collapse:collapse"> ';
    tmplate += '<td align="center" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:25px;padding-bottom:25px;font-size:0"><img src="'+logoUrl+'" alt style="width: 80px; display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> ';
    tmplate += '</tr> ';
    tmplate += '</table> ';
    tmplate += '</td> ';
    tmplate += '</tr> ';
    tmplate += '</table> ';
    tmplate += '</td> ';
    tmplate += '</tr> ';
    tmplate += '</table> ';
    tmplate += '</td> ';
    tmplate += '</tr> ';
    tmplate += '</table> ';
    tmplate += '<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> ';
    tmplate += '<tr style="border-collapse:collapse"> ';
    tmplate += '<td style="padding:0;Margin:0;background: linear-gradient(#292826 100%, #292826 100%) align="center"> ';
    tmplate += '<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> ';
    tmplate += '<tr style="border-collapse:collapse"> ';
    tmplate += '<td align="left" style="padding:0;Margin:0"> ';
    tmplate += '<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> ';
    tmplate += '<tr style="border-collapse:collapse"> ';
    tmplate += '<td valign="top" align="center" style="padding:0;Margin:0;width:600px"> ';
    tmplate += '<table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#ffffff;border-radius:4px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> ';
    tmplate += '<tr style="border-collapse:collapse"> ';
    tmplate += '<td align="center" style="Margin:0;padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:35px"> ';
    tmplate += '<h6 style="Margin:0;line-height:58px;mso-line-height-rule:exactly;font-family:lato, \'helvetica neue\', helvetica, arial, sans-serif;font-size:35px;font-style:normal;font-weight:normal;color:#111111">' + title + '</h6> ';
    tmplate += '</td> ';
    tmplate += '</tr> ';
    tmplate += '<tr style="border-collapse:collapse"> ';
    tmplate += '<td bgcolor="#ffffff" align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;font-size:0"> ';
    tmplate += '<table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> ';
    tmplate += '<tr style="border-collapse:collapse"> ';
    tmplate += '<td style="padding:0;Margin:0;border-bottom:1px solid #ffffff;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td> ';
    tmplate += '</tr> ';
    tmplate += '</table> ';
    tmplate += '</td> ';
    tmplate += '</tr> ';
    tmplate += '</table> ';
    tmplate += '</td> ';
    tmplate += '</tr> ';
    tmplate += '</table> ';
    tmplate += '</td> ';
    tmplate += '</tr> ';
    tmplate += '</table> ';
    tmplate += '</td> ';
    tmplate += '</tr> ';
    tmplate += '</table> ';
    tmplate += '<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> ';
    tmplate += '<tr style="border-collapse:collapse"> ';
    tmplate += '<td align="center" style="padding:0;Margin:0"> ';
    tmplate += '<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> ';
    tmplate += '<tr style="border-collapse:collapse"> ';
    tmplate += '<td align="left" style="padding:0;Margin:0"> ';
    tmplate += '<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> ';
    tmplate += '<tr style="border-collapse:collapse"> ';
    tmplate += '<td valign="top" align="center" style="padding:0;Margin:0;width:600px"> ';
    tmplate += '<table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#ffffff" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> ';
    tmplate += '<tr style="border-collapse:collapse"> ';
    tmplate += '<td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px"> ';
    tmplate += message;
    tmplate += '</td>';
    tmplate += '</tr>';
    tmplate += '<tr style="border-collapse:collapse">';
    tmplate += '<td class="es-m-txt-l" align="left" style="Margin:0;padding-top:20px;padding-left:30px;padding-right:30px;padding-bottom:40px">';
    tmplate += '</td>';
    tmplate += '</tr>';
    tmplate += '</table>';
    tmplate += '</td>';
    tmplate += '</tr>';
    tmplate += '</table>';
    tmplate += '</td>';
    tmplate += '</tr>';
    tmplate += '</table>';
    tmplate += '</td>';
    tmplate += '</tr>';
    tmplate += '</table>';
    tmplate += '</td>';
    tmplate += '</tr>';
    tmplate += '</table>';
    tmplate += '</div>';
    tmplate += '</body>';
    tmplate += '</html>';
  
    return tmplate;
  }


  
module.exports = {

  informative_mail
}