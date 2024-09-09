
const Tasks = Object.freeze({
    getUsers: 'getUsers',
    manageAdminUsers: 'manageAdminUsers',
    getRegisterVendors: 'getRegisterVendors',
    getVendorUsers: 'getVendorUsers',
    manageVendorUsers: 'manageVendorUsers',
    manageVendors: 'manageVendors',
    getVendors: 'getVendors',
    checkVendorAssigned: 'checkVendorAssigned',
    applyVendorship: 'applyVendorship',
    updateVendor: 'updateVendor',
    general: 'general',
    uploadFile: 'uploadFile',
    accecptVendor: 'accecptVendor',
    AppCoreConfig: 'AppCoreConfig',
    createTournament: 'createTournament',
    manageTournaments: 'manageTournaments',
    manageCalendar: 'manageCalendar',
    listCalendarEvents: 'listCalendarEvents',
    listTournaments: 'listTournaments',
    viewTournament: 'viewTournament',
    updateTournament: 'updateTournament',
    approveTournament: 'approveTournament',
    inviteVendorAdminUser:'inviteVendorAdminUser'
  });
  
  const Roles = Object.freeze({
    vendor_super_admin: 'vendor_super_admin',
    vendor_manager: 'vendor_manager',
    vendor_assistant_manager: 'vendor_assistant_manager',
    vendor_creative_manager: 'vendor_creative_manager',
    vendor_admin: 'vendor_admin',
  
    admin: 'admin',
    super_admin: 'super_admin',
    admin_manager: 'admin_manager',
    admin_creative_manager: 'admin_creative_manager',
  });

  const VendorRoles = Object.freeze({
    vendor_super_admin: 'vendor_super_admin',
    vendor_manager: 'vendor_manager',
    vendor_assistant_manager: 'vendor_assistant_manager',
    vendor_creative_manager: 'vendor_creative_manager',
    vendor_admin: 'vendor_admin',
  });
  
  const AdminRoles = Object.freeze({
    
    admin: 'admin',
    super_admin: 'super_admin',
    admin_manager: 'admin_manager',
    admin_creative_manager: 'admin_creative_manager',
  });

  
  module.exports = {
    Tasks,
    Roles,
    VendorRoles,
    AdminRoles,
  };
  
