
export const getRoles = (roles : string) => {

    let rolesArray :string;

  
    switch(roles) {
      case "ROLE_ADMIN":
         rolesArray = ("Admin")
        break;
        case "ROLE_MODERATOR":
          rolesArray = ("Moderator")
         break;
      default:
        rolesArray = ("Normal User")
        break;
    }
  
    return rolesArray;
    }

  