# Define a function to run scripts with fallback paths
# Will be used when git-hooks execute make command from .git/hooks directory
define run_script
	if [ -f "./scripts/$(1).sh" ]; then \
		./scripts/$(1).sh; \
	elif [ -f "../../scripts/$(1).sh" ]; then \
		../../scripts/$(1).sh; \
	else \
		echo "Error: $(1).sh script not found"; \
		exit 1; \
	fi
endef

# Targets using the run_script function
check-lint:
	$(call run_script,check_lint)

commit-msg-hook-enable:
	./scripts/enable_commit_msg_hook.sh

commit-msg-hook-disable:
	./scripts/disable_commit_msg_hook.sh

hook-status:
	./scripts/hook_status.sh

.PHONY: commit-msg-hook-enable commit-msg-hook-disable check_lint hook-status
