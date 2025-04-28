document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
      member.addEventListener('click', function() {
        teamMembers.forEach(otherMember => {
          if (otherMember !== this && otherMember.classList.contains('flipped')) {
            otherMember.classList.remove('flipped');
          }
        });
        
        this.classList.toggle('flipped');
      });
    });
    
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.team-member')) {
        teamMembers.forEach(member => {
          member.classList.remove('flipped');
        });
      }
    });
  });